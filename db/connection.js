const mongoose = require('mongoose')

mongoose.Promise = Promise

mongoose.connect('mongodb://localhost/starving-artist')
.then(() => console.log('connected to database'))

module.exports = mongoose
