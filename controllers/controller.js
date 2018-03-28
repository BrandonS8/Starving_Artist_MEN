const express = require('express')
const router = express.Router()
const Store = require('../models/Store')
const Product = require('../models/Product')

router.get('/', (req, res) => {
  Store.find()
      .populate('products')
      .then((store) => {
        res.json(store)
      })
      .catch((err) => {
        console.log(err)
      })
})

router.get('/products', (req, res) => {
  Product.find()
      .then((product) => {
        res.json(product)
      })
      .catch((err) => {
        console.log(err)
      })
})

router.get('/:id', (req, res) => {
  Store.findOne({ _id: req.params.id})
  .populate('products')
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

router.put('/:storeId/:productId/edit', (req, res) => {
  Product.findOneAndUpdate({_id: req.params.productId}, req.body)
  .then(() => {
    res.json('Product updated')
  })
  .catch(err => {
    console.log(err)
  })
})

router.put('/:id/edit', (req, res) => {
  Store.findOneAndUpdate({_id: req.params.id}, req.body)
  .then(() => {
    res.json('Store updated')
  })
  .catch(err => {
    console.log(err)
  })
})

router.delete('/:storeId/:productId', (req, res) => {
  Product.findOneAndRemove({_id: req.params.productId})
  .then(() => {
    res.json('Product Removed')
  })
  Store.findOne({_id: req.params.storeId})
  .then(store => {
    store.products.pull({_id: req.params.productId})
    store.save()
  })
  .catch(err => {
    console.log(err)
  })
})

router.delete('/:id', (req, res) => {
  let productsToRemove = []
  Store.findOne({_id: req.params.id})
  .then(store => {
    store.products.forEach(product => {
      productsToRemove.push(product)
    })
  })
  .then(() => {
    productsToRemove.forEach(product => {
      Product.findOneAndRemove({_id: product}).then(product => product.save())
    })
  })
  .then(() => {
    Store.findOneAndRemove({_id: req.params.id}).then(store => {
      store.save()
    })
  })
  .then(() => {
    res.json('Store Removed')
  })
  .catch(err => {
    console.log(err)
  })
})

module.exports = router
