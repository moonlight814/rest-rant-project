require('dotenv').config()
const mongoose = require('mongoose')


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
},
console.log('mongo live'))

module.exports.Place= require('./places')