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
          artist: 'Chris Barbalis',
          title: 'A Parrot',
          description: 'A parrot in disguise',
          image: 'https://starving-artist.herokuapp.com/public/seed/chris-barbalis.jpg',
          price: 500.00
        }).then(product => {
          store.products.push(product)
        }),
        
        Product.create({
          artist: 'Patrick Tomasso',
          title: 'Planets',
          description: 'View from a galaxy far far away',
          image: 'https://starving-artist.herokuapp.com/public/seed/planet.jpg',
          price: 130.00
        }).then(product => {
          store.products.push(product)
        }),

        Product.create({
          artist: 'Patrick Tomasso',
          title: 'Lines',
          description: 'Imagination of an artist',
          image: 'https://starving-artist.herokuapp.com/public/seed/patrick-tomasso.jpg',
          price: 150.00
        }).then(product => {
          store.products.push(product)
        }),

        Product.create({
          artist: 'Patrick Henry',
          title: 'Motivation',
          description: 'Each day is a new day',
          image: 'https://starving-artist.herokuapp.com/public/seed/motivation.jpg',
          price: 140.00
        }).then(product => {
          store.products.push(product)
        })
      ]).then(() => {
        store.save(error => console.log(error))
      })
    })

    Store.create({
      name: "Carl's Store",
      about: "Carl's Art Store"
    }).then(store => {
      Promise.all([
        Product.create({
          artist: 'Daniel Posthumah',
          title: 'Colorful Splash',
          description: 'A calming state of mind',
          image: 'https://starving-artist.herokuapp.com/public/seed/daniel-posthumah.jpg',
          price: 160.00
        }).then(product => {
          store.products.push(product)
        }),
       
        Product.create({
          artist: 'David Lauriski',
          title: 'Blocks',
          description: 'Patches of imagaination',
          image: 'https://starving-artist.herokuapp.com/public/seed/gem-lauris-rk.jpg',
          price: 200.00
        }).then(product => {
          store.products.push(product)
        }),
        
        Product.create({
          artist: 'John Jennings',
          title: 'Colorful Bottles',
          description: 'Cabinet full of thoughts',
          image: 'https://starving-artist.herokuapp.com/public/seed/john-jennings.jpg',
          price: 100.00
        }).then(product => {
          store.products.push(product)
        }),
        
        Product.create({
          artist: 'Mec-Rawlings',
          title: 'Abstract State of Mind',
          description: 'Distorted imagaination',
          image: 'https://starving-artist.herokuapp.com/public/seed/mec-rawlings.jpg',
          price: 250.00
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
