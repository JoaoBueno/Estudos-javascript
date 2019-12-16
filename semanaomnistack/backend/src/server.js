const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const server = express()

mongoose.connect(
  'mongodb+srv://bueno:omnistack@cluster0-lpk0d.mongodb.net/omnistack8?retryWrites=true&w=majority',
  { useNewUrlParser: true }
)

server.use(express.json())
server.use(routes)

server.listen(3333)
