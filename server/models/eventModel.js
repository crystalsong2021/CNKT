const mongoose = require('mongoose')

const Schema = mongoose.Schema

const eventSchema = new Schema({
  eventId: {
    type: Number
  },
  hostName: {
    type: String
  },
  eventTitle: {
    type: String
  },
  eventLocation: {
    type: String
  },
  eventDateTime: {
    type: String
  },
  attendees: {
    type: Number
  },
  capacity: {
    type: Number
  }

}, {timestamps: true})

module.exports = mongoose.model('Event', eventSchema)