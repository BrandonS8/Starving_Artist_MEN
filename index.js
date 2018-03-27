const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const apiController = require('./controllers/controller')

const app = express()

app.use(cors())
app.use(parser.json())

app.use('/api', apiController)

app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'))
