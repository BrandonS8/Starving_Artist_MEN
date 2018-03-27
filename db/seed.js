const Store = require('../models/Store')
const Product = require('../models/Product')

Store.remove({}).then(() => {
  Product.remove({}).then(() => {
    Store.create({
      name: "Brandon's Store",
      about: "Brandon's Store"
    })
  })
})
