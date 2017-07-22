const _ = require("lodash");
const Client = require('coinbase').Client;
const moment = require("moment")
const Models = require("../models")

exports.buyBTC = (req,res) => {
  var client = new Client({
    'apiKey': process.env.CB_KEY,
    'apiSecret': process.env.CB_SECRET
  });


  client.getSellPrice({"currency": process.env.CURRENCY_TYPE}, (err, sellPrice) => {

    res.json(client)
  })
}
