const mongoose = require('../db/connection')

const StoreSchema = new mongoose.Schema({
  name: String,
  about: String,
  products: [
    {
      type: mongoose.Schema.Types.ObjectId
      ref: 'Product'
    }
  ]
})

const Store = mongoose.model('Store', StoreSchema)

module.exports = Store