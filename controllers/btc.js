const _ = require("lodash");
const Client = require('coinbase').Client;
const moment = require("moment")


exports.buyBTC = (req,res) => {
  let minBuy = 5
  let maxBuy = 20
  let maxSpend = 200

  var client = new Client({
    'apiKey': process.env.CB_KEY,
    'apiSecret': process.env.CB_SECRET
  });
  client.getSellPrice({"currency": process.env.CURRENCY_TYPE}, (err, sellPrice) => {
    res.json(client)
  })
}
