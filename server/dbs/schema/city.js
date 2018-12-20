const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CitySchema = new Schema({
  id: {
    type: String,
    require: true
  },
  value: {
    type: Array,
    require: true
  }
})

module.exports = mongoose.model('City', CitySchema)
