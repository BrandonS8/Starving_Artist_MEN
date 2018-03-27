const express = require('express')
const router = express.Router()
const Store = require('../models/Store')
const Product = require('../models/Product')

router.get('/', (req, res) => {
  Store.find()
      .then((store) => {
        res.json(store)
      })
      .catch((err) => {
        console.log(err)
      })
})

router.get('/:id', (req, res) => {
  Store.findOne({ _id: req.params.id})
  .then(store => {
    res.json(store)
  })
  .catch(err => {
    console.log(err)
  })
})

router.get('/:storeId/:productId', (req, res) => {
  Product.findOne({_id: req.params.productId})
  .then(product => {
    res.json(product)
  })
  .catch(err => {
    console.log(err)
  })
})

module.exports = router
