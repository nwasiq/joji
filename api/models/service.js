'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ServiceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  service: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  location: {
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: {
      type: [Number],
      default: [0, 0]
    }
  },
  number: {
    type: String,
    required: true
  },
  pictures: [{
    type: String
  }],
  tags: [{
    type: String
  }],
  collector: {
    phone: {
      type: String
    },
    name: {
      type: String
    }
  }
})
ServiceSchema.index({ location: '2dsphere' })

const service = module.exports = mongoose.model('service', ServiceSchema)
