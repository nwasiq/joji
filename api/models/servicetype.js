'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ServiceTypeShema = new Schema({
  name: {
    type: String,
    required: true
  }
})

const servicetype = module.exports = mongoose.model('servicetype', ServiceTypeShema)
