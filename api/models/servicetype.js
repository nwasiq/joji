'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ServiceTypeShema = new Schema({
  name: {
    type: String,
    required: true
  }
})

ServiceTypeShema.pre('save', async function () {
  this.name = this.name.toLowerCase()
  const serviceType = await this.constructor.findOne({ name: this.name })
  if (serviceType) {
    throw new Error('Service type already exists')
  }
})

const servicetype = module.exports = mongoose.model('servicetype', ServiceTypeShema)