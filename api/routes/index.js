'use strict'

const express = require('express')
const router = express.Router()

router.use('/services', require('./service'))
router.use('/servicetypes', require('./servicetype'))

module.exports = router
