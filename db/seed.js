const Store = require('../models/Store')
const Product = require('../models/Product')

const fs = require('fs')

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
          image: 'https://starving-artist.herokuapp.com/public/seed/dog.jpg',
          price: 500000
        }).then(product => {
          store.products.push(product)
        }),
        Product.create({
          artist: 'Brandon',
          title: 'A sponge',
          description: 'Literally a picture of a sponge',
          image: 'https://starving-artist.herokuapp.com/public/seed/sponge.jpg',
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
          image: 'https://starving-artist.herokuapp.com/public/seed/carl1.png',
          price: 1
        }).then(product => {
          store.products.push(product)
        }),
        Product.create({
          artist: 'Carl',
          title: 'Teacher Carl',
          description: 'Carl does a teach',
          image: 'https://starving-artist.herokuapp.com/public/seed/carl2.jpg',
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

// Remove all files from public folder
fs.readdir('public', (err, files) => {
  if (err) {
    console.log(err)
  }
  console.log(files)
  files.forEach((file, err) => {
    if (file !== 'seed') {
      fs.unlink(`public/${file}`)
      if (err) {
        console.log(err)
      }
    }
  })
  console.log(files)
  console.log('Public directory cleared')
})

// https://stackoverflow.com/questions/27072866/how-to-remove-all-files-from-directory-without-removing-directory-in-node-js
