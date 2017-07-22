const Promise = require('bluebird')
const mongoose = Promise.promisifyAll(require('mongoose'));
const Schema = mongoose.Schema;
const userSchema = new Schema({
  firstname:String,
  lastname:String,
})


const User = mongoose.model('User', userSchema);
module.exports = User;
