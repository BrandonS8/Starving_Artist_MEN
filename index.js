const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const apiController = require('./controllers/controller')

const app = express()

app.use(cors())
app.use(parser.json())

app.use('/api', apiController)

app.listen(3001, () => console.log('Listening on port 3001 :)'))
