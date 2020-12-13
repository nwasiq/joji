const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const path = require('path')
require('dotenv').config() // include environment variables

/**
 * Model loading
 */

const Service = require('./api/models/service')
const ServiceType = require('./api/models/servicetype')
mongoose.plugin(schema => {
  schema.options.usePushEach = true
})

app.use(compression())
app.use(cors())

// mongoose instance connection url connection
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(require('./api/routes'))

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})
app.listen(port)

console.log('Wots api started at: ' + port)
