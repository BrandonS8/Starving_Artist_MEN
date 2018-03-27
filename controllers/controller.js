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


module.exports = router
