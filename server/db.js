const mongoose = require('mongoose');


const connectionFunc = async function () {
  return mongoose.connect('mongodb://localhost:27017/Users');
}


const dataBase = mongoose.connection

dataBase.on('error', err => console.log(err))
dataBase.once('connected', () => console.log('database connected'))

module.exports = connectionFunc;