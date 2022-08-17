import express from "express";
import moment from 'moment';

import Call from "../models/Call.js";
import Fii from "../models/Fii.js";

import FiiAPI from "../utils/FiiAPI.js";

const router = express.Router();

//refreshList
router.post("/refreshList", (req, res) => {
  console.log('Refreshing list...');
  const { listTicker } = req.body;

  listTicker.forEach((Ticker, index) => {
    // console.log('Fii.findOne...', Ticker);
    Fii.findOne({ Ticker }, (err, item) => {
      if (err) 
        return {error: true, message: `DB Service temporality unavaliable...`, err};
      if (item && moment().isSame(item?.updatedAt, 'day')) {
        // console.log(Ticker, 'already updated');
        // ret.push(item)
        return ;
      }
      FiiAPI(Ticker)
        // .then((data) => ret.push(data))
        .then((data) => {
          // console.log('FiiAPI(Ticker).then(data)');
          const configUpsert = {
            new: true,
            upsert: true // Make this update into an upsert
          };
          // console.log('Fii.findOneAndUpdate');
          Fii.findOneAndUpdate({ Ticker }, data, configUpsert)
            // .then((newData) => newData)
            .catch((err) => console.debug({error: true, message: `DB Service temporality overloaded...`, err}));
        })
        .catch((err) => console.debug({error: true, message: `API Service unavaliable on Ticker '${Ticker}...`, err}));
      return ;
    });
  });

  res.status(200).json({error: false, message: "Refreshing tickers", listTicker});
});

//GET LIST
router.get("/list", (req, res) => {
  const { listTicker } = req.body;
  // console.log(listTicker);

  Fii.find({ 'Ticker': { $in: listTicker } }, (err, data) => {
    if (err) return res.status(500).json({error: true, message: `Service temporality unavaliable...`, err});
      console.log(`Recovered from db Ticker '${data.length}'`);
      // const data = [];
      // listRecovered.forEach((item) => data.push({ Ticker: item.Ticker, item }));
      const listFounded = data.map(({Ticker}) => Ticker);
      const listNotFounded = listTicker.filter((item) => listFounded.indexOf(item) < 0);
      res.status(200).json({error: false, listNotFounded, listFounded, data});
  })
});

//GET TICKER
router.get("/:Ticker", (req, res) => {
  // console.log(req.params);
  const { Ticker = false } = req.params;
  if(!Ticker) return res.status(500).json({error: true, message: `Fii invalid...`});

  if(!process.env.DEBUG) {
    const Host = req.get('site') || req.get('host');
    const { originalUrl: Url } = req;
    const call = {Ticker, Host, Url};
    console.log('new Call...');
    // console.debug(call);
    new Call(call).save();
    // .then(console.debug({error: false, message: `Call saved`}))
    // .catch((err) => console.debug({error: true, message: `Call error on save`, err}));
  }

  console.log('Fii.findOne', Ticker);
  Fii.findOne({ Ticker }, (err, item) => {
    if (err) return res.status(500).json({error: true, message: `Service temporality unavaliable...`, err});
    console.log(item?.updatedAt, moment().isAfter(item?.updatedAt, 'day'));
    if (item === null || moment().isAfter(item?.updatedAt, 'day')) {
      console.log('FiiAPI', Ticker);
      FiiAPI(Ticker)
        .then((data) => {
          console.log('FiiAPI(Ticker).then(data)');
          
          const configUpsert = {
            new: true,
            upsert: true // Make this update into an upsert
          };
          console.log('Fii.findOneAndUpdate');
          Fii.findOneAndUpdate({ Ticker }, data, configUpsert)
            .then(res.status(201).json(data))
            .catch((err) => res.status(500).json({error: true, message: `Service temporality overloaded...`, err}));

        })
        .catch((err) => res.status(500).json({error: true, message: `Service unavaliable on Ticker '${Ticker}...`, err}));
    } else {
      console.log(`Recovered from db Ticker '${Ticker}'`);
      res.status(200).json(item);
    }
  })
});

export default router;
