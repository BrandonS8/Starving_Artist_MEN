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
          title: 'A dog',
          description: 'A drawing of a dog',
          image: 'https://i.pinimg.com/originals/5f/c8/37/5fc83789f0886812ef3f26e8a22823d2.jpg',
          price: 500000
        }).then(product => {
          store.products.push(product)
        }),
        Product.create({
          artist: 'Brandon',
          title: 'A sponge',
          description: 'Literally a picture of a sponge',
          image: 'https://images-na.ssl-images-amazon.com/images/I/51bJaFHxPPL._SX342_.jpg',
          price: 13
        }).then(product => {
          store.products.push(product)
        })
      ]).then(() => {
        store.save(error => console.log(error))
      })
    })
    Store.create({
      name: "Carl's Store",
      about: "Carl's Lame Store"
    }).then(store => {
      Promise.all([
        Product.create({
          artist: 'Carl',
          title: 'Carl',
          description: 'A picture of carl',
          image: 'https://vignette.wikia.nocookie.net/jimmyneutron/images/7/71/Carl.png/revision/latest?cb=20180219044646',
          price: 1
        }).then(product => {
          store.products.push(product)
        }),
        Product.create({
          artist: 'Carl',
          title: 'Teacher Carl',
          description: 'Carl does a teach',
          image: 'https://vignette.wikia.nocookie.net/poohadventures/images/d/df/Carl_Wheezer.jpg/revision/latest?cb=20130526014202',
          price: 2
        }).then(product => {
          store.products.push(product)
        })
      ]).then(() => {
        store.save(error => console.log(error))
      })
    })
  })
})
