const mongoose = require('../db/connection')

const ProductSchema = new mongoose.Schema({
  artist: String,
  tile: String,
  description: String,
  image: String,
  price: Number

})

mongoose.model('Product', ProductSchema)

module.exports = mongoose
