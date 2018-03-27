const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const Apicontroller = require('../controllers/controller')

const app = express()

app.use(cors())
app.use(parser.json())

app.use('/api', Apicontroller)

app.get('/', (req, res) => {
  res.json({'hello': 'world'})
})

app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'))
