import express from "express";

import Call from "../models/Call.js";
import Fii from "../models/Fii.js";

import FiiAPI from "../utils/FiiAPI.js";

const router = express.Router();

//GET IP
router.get("/:Ticker", (req, res) => {
  // console.log(req.params);
  const { Ticker = false } = req.params;
  if(!Ticker) return res.status(500).json({error: true, message: `Fii invalid...`});

  if(!process.env.DEBUG) {
    const Host = req.get('site') || req.get('host');
    const { originalUrl: Url } = req;
    const call = {Ticker, Host, Url};
    console.log('new Call...');
    console.debug(call);
    new Call(call).save()
    .then(console.debug({error: false, message: `Call saved`}))
    .catch((err) => console.debug({error: true, message: `Call error on save`, err}));
  }

  console.log('Fii.findOne', Ticker);
  Fii.findOne({ Ticker }, (err, item) => {
    if (err) return res.status(500).json({error: true, message: `Service temporality unavaliable...`, err});
    if (item === null) {
      console.log('FiiAPI', Ticker);
      FiiAPI(Ticker).then((data) => {
        console.debug(data);
        console.log('new Fii(data)');
        const fii = new Fii(data);
        console.debug(fii);
        console.log('fii.save()');
        fii.save()
          .then(res.status(201).json(data))
          .catch((err) => console.debug({error: true, message: `Service temporality overloaded...`, err}));
      }).catch((err) => res.status(500).json({error: true, message: `Service unavaliable on Ticker '${Ticker}...`, err}));
    } else {
      console.log(`Recovered from db Ticker '${Ticker}'`);
      res.status(200).json(item);
    }
  })
});

export default router;
