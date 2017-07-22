const Promise = require('bluebird')
const mongoose = Promise.promisifyAll(require('mongoose'));
const Schema = mongoose.Schema;
const accountSchema = new Schema({
  user: {type:Schema.Types.ObjectId, ref:'User'},
  lastTransaction: {type:Schema.Types.ObjectId, ref:'Transaction'},
  netBTC: Number,
  netETC: Number,
  maxBuyBTC: Number,
  minBuyBTC: Number,
  maxBuyETC: Number,
  minBuyETC: Number,
})


const Account = mongoose.model('Account', accountSchema);
module.exports = Account;
