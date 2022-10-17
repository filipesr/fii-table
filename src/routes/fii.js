import express from "express";
import moment from 'moment';

import Call from "../models/Call.js";
import Fii from "../models/Fii.js";

import FiiAPI from "../utils/FiiAPI.js";

const router = express.Router();

const formatDateMongoose = "YYYY-MM-DD";
const allExceptId = "-_id -__v -createdAt -updatedAt -lastRevenuesTable._id -news._id";

const parseNumber = (num = "") => {
  const sntNum = num.replace(/[.R\$%]/g, '').replace(',', '.');
  let vlNum = Number.parseFloat(sntNum);
  if(sntNum.endsWith("M")) vlNum *= 1000000;
  return vlNum;
}
const parseFii = (data) => {
  // if (process.env.DEBUG) console.debug(data.dateOnCVM, moment(data?.dateOnCVM, "DD/MM/YYYY"));
  // if (process.env.DEBUG) console.debug(data);
  // if (process.env.DEBUG) console.debug(data.lastRevenuesTable[0]);
  try {
    const patrimonialValueRelative = (parseNumber(data.currentQuota) / parseNumber(data.patrimonialValuePerQuota));
    // const firstRevenueDate = moment(data.lastRevenuesTable[0].dataBase, "DD.MM.YYYY");
    const secondRevenueDate = moment(data.lastRevenuesTable[1].dataBase, "DD.MM.YYYY");
    const listRevenueDate = data?.lastRevenuesTable?.map((item) => moment(item?.dataBase, "DD.MM.YYYY"));
    const minRevenueDate = moment.min(listRevenueDate);
    const maxRevenueDate = moment.max(listRevenueDate);
    const mounthsPastLastRevenue = moment().diff(maxRevenueDate, 'months', true).toFixed(2);
    const diffMonthsFirstSecondDateBase = maxRevenueDate.diff(secondRevenueDate, 'months', true);
    const prevMonthNextYield = maxRevenueDate.add(diffMonthsFirstSecondDateBase, 'M');
    // next payment predict
    const secondPaymentDate = moment(data.lastRevenuesTable[1].datePayment, "DD.MM.YYYY");
    const lastPaymentDate = moment(data.lastRevenuesTable[0].datePayment, "DD.MM.YYYY");
    const diffMonthsFirstSecondDatePay = lastPaymentDate.diff(secondPaymentDate, 'months', true);
    const prevMonthNextPay = lastPaymentDate.add(diffMonthsFirstSecondDatePay, 'M');

    const diffMonthsRevenues = (maxRevenueDate.diff(minRevenueDate, 'months', true) + 1).toFixed(2);
    const numRevenues = data.lastRevenuesTable.length;
    const frequencyYield = (diffMonthsRevenues / numRevenues).toFixed(2);
    // const listYield = data?.lastRevenuesTable?.map((item) => parseNumber(item.dividendYield));
    const sumYield = data.lastRevenuesTable
      .map((item) => parseNumber(item.dividendYield))
      .reduce((prev, curr) => prev + curr)
      .toFixed(2);
    const avgMonthYield = (sumYield / diffMonthsRevenues).toFixed(2);
    // const diffMonthsRevenues = diffRevenueDate.asMonth()
    if (process.env.DEBUG) 
      console.debug({
        minRevenueDate, 
        maxRevenueDate, 
        secondRevenueDate,
        numRevenues, 
        mounthsPastLastRevenue,
        diffMonthsRevenues, 
        frequencyYield, 
        sumYield, 
        avgMonthYield,
        diffMonthsFirstSecondDateBase,
        prevMonthNextYield,
        prevMonthNextPay,
      });

    return {
      ...data,
      dateOnCVM: (data.dateOnCVM == "--/--/--")
        ? null
        : moment(data.dateOnCVM, "DD/MM/YYYY").format(formatDateMongoose),
      dividendYield: parseNumber(data.dividendYield),
      lastYield: parseNumber(data.lastYield),
      mounthsPastLastRevenue,
      frequencyYield, 
      sumYield, 
      avgMonthYield,
      prevMonthNextYield: moment(prevMonthNextYield, "DD/MM/YYYY").format(formatDateMongoose),
      prevMonthNextPay: moment(prevMonthNextPay, "DD/MM/YYYY").format(formatDateMongoose),
      equity: parseNumber(data.equity),
      patrimonialValuePerQuota: parseNumber(data.patrimonialValuePerQuota),
      patrimonialValueRelative,
      currentQuota: parseNumber(data.currentQuota),
      min52weeks: parseNumber(data.min52weeks),
      max52weeks: parseNumber(data.max52weeks),
      valorization12months: parseNumber(data.valorization12months),
      numberOfQuota: parseNumber(data.numberOfQuota),
      numberOfQuotaHolders: parseNumber(data.numberOfQuotaHolders),
      lastRevenuesTable: data?.lastRevenuesTable?.map((item) => {
        return {
          ...item,
          dataBase: moment(item?.dataBase, "DD.MM.YYYY").format(formatDateMongoose),
          datePayment: moment(item?.datePayment, "DD.MM.YYYY").format(formatDateMongoose),
          baseQuotation: parseNumber(item.baseQuotation),
          dividendYield: parseNumber(item.dividendYield),
          yield: parseNumber(item.yield),
        }
      }),
      news: data?.news?.map((item) => {
        return {
          ...item,
          date: moment(item?.date, "DD.MM.YYYY").format(formatDateMongoose),
        }
      }),
    };
  } catch (error) {
      console.debug(error);
  }

}

//refreshList
router.post("/refreshList", (req, res) => {
  if (process.env.DEBUG) console.log('Refreshing list...');

  // filtrar as que pagaram a menos de 2 meses, 
  // com frequencia menor que 1.3 meses e 
  // com, pelo menos, 10 pagamentos de dividendos
  const $where = { 
    // updatedAt: { $lt: moment().format(formatDateMongoose)},
  };

  Fii.find($where).exec((err, data) => {
  // , (err, data) => {
    if (err) return res.status(500).json({error: true, message: `Service temporality unavaliable...`, err});
    if (process.env.DEBUG) console.log(`Recovered from db Ticker '${data.length}'`);
    // if (process.env.DEBUG) console.debug(data);
    const listTicker = data.map(({ticker}) => ticker);
    // if (process.env.DEBUG) console.debug(listTicker);

    res.status(200).json({error: false, message: "Refreshing tickers", listTicker});

    data.forEach((item, index) => {
      const {ticker} = item;
      if (process.env.DEBUG) console.log('Fii.findOne...', ticker);
      // Fii.findOne({ ticker, ...$where }, (err, item) => {
      //   if (err) {
      //     if (process.env.DEBUG) console.debug({message: `Error on recover data of '${ticker}'`, err});
      //     return ;
      //   };
      //   if (!item) {
      //     if (process.env.DEBUG) console.debug({message: `Without data recovered of '${ticker}'`, item});
      //     return ;
      //   }
  
        FiiAPI(ticker)
          // .then((data) => ret.push(data))
          .then((data) => {
              // console.log('FiiAPI(ticker).then(data)');
            if (!data || data?.error) return console.error(ticker, data?.message); 
            const fii = parseFii(data);
  
            const configUpsert = {
              new: true,
              upsert: true // Make this update into an upsert
            };
            // console.log('Fii.findOneAndUpdate');
            Fii.findOneAndUpdate({ ticker }, fii, configUpsert)
              // .then((newdata) => newdata)
              .catch((err) => console.debug({error: true, ticker, message: `DB Service temporality overloaded...`, err}));
          })
          .catch((err) => console.debug({error: true, ticker, message: `API Service unavaliable on Ticker '${ticker}...`, err}));
        return ;
      // });
    });
  })

  // res.status(200).json({error: false, message: "Refreshing tickers", listTicker});
});

//GET BESTS
router.get("/bests", (req, res) => {
  const filterDef = { maxMounthsPastLastRevenue: 2, maxFrequencyYield: 1.3, minLastDY: 1, minRevenuesCount: 10, maxPatrimonialValueRelative: 1 };
  const { filter } = req.body;
  const { maxMounthsPastLastRevenue, maxFrequencyYield, minLastDY, minRevenuesCount, maxPatrimonialValueRelative } = {...filterDef, ...filter};
  console.log(maxMounthsPastLastRevenue);
  // filtrar as que pagaram a menos de 2 meses, 
  // com frequencia menor que 1.3 meses e 
  // com, pelo menos, 10 pagamentos de dividendos
  const $where = { 
    prevMonthNextYield: { $gt: moment().format(formatDateMongoose)},
    mounthsPastLastRevenue: { $lt: maxMounthsPastLastRevenue }, 
    // mounthsPastLastRevenue: { $gt: 1 }, 
    frequencyYield: { $lt: maxFrequencyYield }, 
    dividendYield: { $gt: minLastDY }, 
    "$expr":{$gte:[{$size:"$lastRevenuesTable"}, minRevenuesCount]}, 
    patrimonialValueRelative: { $lt: maxPatrimonialValueRelative }, 
  };

  // ordenar pelo mais recente e com médio DY maior
  const $sort = {
    prevMonthNextYield: 1,
    avgMonthYield: -1,
    mounthsPastLastRevenue: 1,
  };

  Fii.find($where, allExceptId).sort($sort).exec((err, data) => {
    if (err) return res.status(500).json({error: true, message: `Service temporality unavaliable...`, err});
    if (process.env.DEBUG) console.log(`Recovered from db Ticker '${data.length}'`);
      // const data = [];
      // listRecovered.forEach((item) => data.push({ item.ticker, item }));
      const resumeTicker = ({ticker, typeOfFII, dividendYield, currentQuota, avgMonthYield, prevMonthNextYield, prevMonthNextPay, patrimonialValueRelative}) => 
        `${ticker} ` + 
        `(${typeOfFII}) - ` + 
        `VP: ${patrimonialValueRelative.toFixed(2)}% - ` + 
        `lastDY: ${dividendYield.toFixed(2)}% - ` + 
        `avgDY12: ${avgMonthYield.toFixed(2)}% - ` + 
        `prevDtBase: ${moment(prevMonthNextYield).format("DD/MM")} - ` + 
        `prevDtPay: ${moment(prevMonthNextPay).format("DD/MM")} - ` + 
        `Cuota: R$ ${currentQuota.toFixed(2)}`;
      const resume = data.map(resumeTicker);
      res.status(200).json({error: false, resume, data});
  })
});

//GET LIST
router.get("/list", (req, res) => {
  const { listTicker } = req.body;
  // console.log(listTicker);

  Fii.find({ 'ticker': { $in: listTicker } }, allExceptId, (err, data) => {
    if (err) return res.status(500).json({error: true, message: `Service temporality unavaliable...`, err});
    if (process.env.DEBUG) console.log(`Recovered from db Ticker '${data.length}'`);
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
  // return console.log(parseNumber("R$ 42,40"), parseNumber("2,03%"), parseNumber("R$ 42,40 M"));
  const { ticker = false } = req.params;
  if(!ticker) return res.status(500).json({error: true, ticker, message: `Fii invalid...`});

  if(!process.env.DEBUG) {
    const host = req.get('site') || req.get('host');
    const { originalUrl: url } = req;
    const call = {ticker, host, url};
    if (process.env.DEBUG) console.log('new Call...');
    // console.debug(call);
    new Call(call).save();
    // .then(console.debug({error: false, message: `Call saved`}))
    // .catch((err) => console.debug({error: true, message: `Call error on save`, err}));
  }

  console.log('Fii.findOne', ticker);
  Fii.findOne({ ticker }, allExceptId, (err, item) => {
    if (err) return res.status(500).json({error: true, ticker, message: `Service temporality unavaliable...`, err});
    if (process.env.DEBUG || item === null || moment().isAfter(item?.updatedAt, 'day')) {
      if (process.env.DEBUG) console.log('FiiAPI', ticker);
      FiiAPI(ticker)
        .then((data) => {
          if (!data || data?.error) return res.status(404).json(data); 
          if (process.env.DEBUG) console.log('FiiAPI(ticker).then(data)');
          const fii = parseFii(data);
          // if (process.env.DEBUG) return res.status(201).json(fii);
          
          const configUpsert = {
            new: true,
            upsert: true // Make this update into an upsert
          };
          if (process.env.DEBUG) console.log('Fii.findOneAndUpdate');
          Fii.findOneAndUpdate({ ticker }, fii, configUpsert)
            .then(res.status(201).json(fii))
            .catch((err) => ({error: true, ticker, message: `Service temporality overloaded...`, err}));

        })
        .catch((err) => res.status(500).json({error: true, message: `Service unavaliable on Ticker '${ticker}...`, err}));
    } else {
      if (process.env.DEBUG) console.log(`Recovered from db Ticker '${ticker}'`);
      res.status(200).json(item);
    }
  })
});

export default router;
