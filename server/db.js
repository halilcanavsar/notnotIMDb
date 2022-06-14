const mongoose = require('mongoose');



const connectionFunc = async function () {
  return mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    });
}


const dataBase = mongoose.connection

dataBase.on('error', err => console.log(err))
dataBase.once('connected', () => console.log('database connected'))

module.exports = connectionFunc;