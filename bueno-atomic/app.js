'use strict'

require('./config/db')

const CRUD = require('./pokemon-controller')

const query = { name: /ivysaur/i }
const data = {
  name: 'Atomicmon',
  description: 'Vai que vai',
  type: 'terra',
  attack: 69,
  defense: 96,
  height: 0.7
}

CRUD.create(data)
CRUD.retrieve(query)
