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
router.post('/', (req, res) => {
  Store.create({
    name: req.body.name,
    about: req.body.about,
    products: []
  })
  .then(store => {
    res.json(`Store Created: ${store}`)
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

router.post('/:id', (req, res) => {
  Store.findOne({_id: req.params.id})
  .then(store => {
    Product.create({
      artist: req.body.artist,
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
      price: req.body.price
    })
    .then(product => {
      store.products.push(product)
    })
    .then(() => {
      store.save()
    })
  })
  .then(() => {
    res.json('Product added')
  })
  .catch(err => {
    console.log(err)
  })
})

module.exports = router
