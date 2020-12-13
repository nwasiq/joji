
'use strict'

const express = require('express')
const router = express.Router({})

const crudController = require('../controllers/crud')

router.post('', crudController.create)
router.get('', crudController.findAll)
router.get('/:entityId', crudController.findOne)
router.put('/:entityId', crudController.update)
router.delete('/:entityId', crudController.delete)

module.exports = router
