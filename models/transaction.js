const Promise = require('bluebird')
const mongoose = Promise.promisifyAll(require('mongoose'));
const Schema = mongoose.Schema;
const transactionScehma = new Schema({
  type: { type: String, enum: ['BUY','SELL', 'HOLD'] },
  date:{ type: Date, default:Date.now },
  input: Number,
  output: Number,
  inputType:{ type: String, enum: ['BTC', 'ETC', 'USD']},
  outputType:{ type: String, enum: ['BTC', 'ETC', 'USD']},
})


const Transaction = mongoose.model('Transaction', transactionScehma);
module.exports = Transaction;
