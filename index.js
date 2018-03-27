const express = require('express')
const parser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(parser.json())

app.get('/', (req, res) => {
    res.json({"hello": "world"})
})

app.listen(3001, () => console.log('Listening on port 3001 :)'))
