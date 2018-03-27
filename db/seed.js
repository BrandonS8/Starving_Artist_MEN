const Store = require('../models/Store')
const Product = require('../models/Product')

Store.remove({}).then(() => {
  Product.remove({}).then(() => {
    Store.create({
      name: "Brandon's Store",
      about: "Brandon's Cool Store"
    }).then(store => {
      Promise.all([
        Product.create({
          artist: 'Brandon',
          tile: 'A dog',
          description: 'a drawing of a dog',
          image: 'https://i.pinimg.com/originals/5f/c8/37/5fc83789f0886812ef3f26e8a22823d2.jpg',
          price: 500000
        }).then(product => {
          store.products.push(product)
        })
      ]).then(() => {
        store.save(error => console.log(error))
      })
    })
  })
})
