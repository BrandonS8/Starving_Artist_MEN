const mongoose = require('../db/connection')

const ProductSchema = new mongoose.Schema({
  artist: String,
  title: String,
  description: String,
  image: String,
  price: Number

})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product
