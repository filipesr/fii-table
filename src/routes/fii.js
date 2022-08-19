import express from "express";
import moment from 'moment';

import Call from "../models/Call.js";
import Fii from "../models/Fii.js";

import FiiAPI from "../utils/FiiAPI.js";

const router = express.Router();
const parseFii = (data) => {
  // console.log(data.dateOnCVM, moment(data?.dateOnCVM, "DD/MM/YYYY"));
  const formatDateMongoose = "YYYY-MM-DD";
  return {
    ...data,
    dateOnCVM: moment(data.dateOnCVM, "DD/MM/YYYY").format(formatDateMongoose),
    lastRevenuesTable: data?.lastRevenuesTable?.map((item) => {
      return {
        ...item,
        // dataBase: item?.dataBase?.replace('.', '/'),
        // datePayment: item?.datePayment?.replace('.', '/'),
        dataBase: moment(item?.dataBase, "DD.MM.YYYY").format(formatDateMongoose),
        datePayment: moment(item?.datePayment, "DD.MM.YYYY").format(formatDateMongoose),
      }
    }),
    news: data?.news?.map((item) => {
      return {
        ...item,
        date: moment(item?.date, "DD.MM.YYYY").format(formatDateMongoose),
        // date: item?.date?.replace('.', '/'),
      }
    }),
  };
}

//refreshList
router.post("/refreshList", (req, res) => {
  console.log('Refreshing list...');
  const { listTicker } = req.body;

  listTicker.forEach((ticker, index) => {
    // console.log('Fii.findOne...', ticker);
    Fii.findOne({ ticker }, (err, item) => {
      if (err) return {error: true, message: `DB Service temporality unavaliable...`, err};
      if (item && moment().isSame(item?.updatedat, 'day')) {
        // console.log(ticker, 'already updated');
        // ret.push(item)
        return ;
      }
      FiiAPI(ticker)
        // .then((data) => ret.push(data))
        .then((data) => {
            // console.log('FiiAPI(ticker).then(data)');
          if (!data || data?.error) return console.log(ticker, data?.message); 
          const fii = parseFii(data);

          const configUpsert = {
            new: true,
            upsert: true // Make this update into an upsert
          };
          // console.log('Fii.findOneAndUpdate');
          Fii.findOneAndUpdate({ ticker }, fii, configUpsert)
            // .then((newdata) => newdata)
            .catch((err) => console.debug({error: true, message: `DB Service temporality overloaded...`, err}));
        })
        .catch((err) => console.debug({error: true, message: `API Service unavaliable on Ticker '${ticker}...`, err}));
      return ;
    });
  });

  res.status(200).json({error: false, message: "Refreshing tickers", listTicker});
});

//GET LIST
router.get("/list", (req, res) => {
  const { listTicker } = req.body;
  // console.log(listTicker);

  Fii.find({ 'ticker': { $in: listTicker } }, (err, data) => {
    if (err) return res.status(500).json({error: true, message: `Service temporality unavaliable...`, err});
      console.log(`Recovered from db Ticker '${data.length}'`);
      // const data = [];
      // listRecovered.forEach((item) => data.push({ item.ticker, item }));
      const listFounded = data.map(({ticker}) => ticker);
      const listNotFounded = listTicker.filter((item) => listFounded.indexOf(item) < 0);
      res.status(200).json({error: false, listNotFounded, listFounded, data});
  })
});

//GET TICKER
router.get("/:ticker", (req, res) => {
  // console.log(req.params);
  const { ticker = false } = req.params;
  if(!ticker) return res.status(500).json({error: true, message: `Fii invalid...`});

  if(!process.env.DEBUG) {
    const host = req.get('site') || req.get('host');
    const { originalUrl: url } = req;
    const call = {ticker, host, url};
    console.log('new Call...');
    // console.debug(call);
    new Call(call).save();
    // .then(console.debug({error: false, message: `Call saved`}))
    // .catch((err) => console.debug({error: true, message: `Call error on save`, err}));
  }

  console.log('Fii.findOne', ticker);
  Fii.findOne({ ticker }, (err, item) => {
    if (err) return res.status(500).json({error: true, message: `Service temporality unavaliable...`, err});
    console.log(item?.updatedat, moment().isAfter(item?.updatedat, 'day'));
    if (item === null || moment().isAfter(item?.updatedat, 'day')) {
      console.log('FiiAPI', ticker);
      FiiAPI(ticker)
        .then((data) => {
          if (!data || data?.error) return res.status(404).json(data); 
          console.log('FiiAPI(ticker).then(data)');
          const fii = parseFii(data);
          
          const configUpsert = {
            new: true,
            upsert: true // Make this update into an upsert
          };
          console.log('Fii.findOneAndUpdate');
          Fii.findOneAndUpdate({ ticker }, fii, configUpsert)
            .then(res.status(201).json(fii))
            .catch((err) => ({error: true, message: `Service temporality overloaded...`, err}));

        })
        .catch((err) => res.status(500).json({error: true, message: `Service unavaliable on Ticker '${ticker}...`, err}));
    } else {
      console.log(`Recovered from db Ticker '${ticker}'`);
      res.status(200).json(item);
    }
  })
});

export default router;
