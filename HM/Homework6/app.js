const express = require('express')
const bodyParser = require('body-parser')

const workRouter = require('./routes/work')

require('./mongo-connection')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.use('/work', workRouter)

app.get('/', (req, res) => {
  res.render('index')
})


module.exports = app