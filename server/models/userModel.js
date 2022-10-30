const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String
  },
  organization: {
    type: String
  },
  email: {
    type: String
  },
  phoneNumber: {
    type: String
  },

}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)