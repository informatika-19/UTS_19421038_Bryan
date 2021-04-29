const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mhsSchema = new Schema({
  NamaMahasiswa: {
    type: String
  },
  Npm: {
    type: String
  },
  Prodi: {
    type: String
  }
})
module.exports = mongoose.model('mhs', mhsSchema)
