'use strict'

require('./config/db')

const CRUD = require('./pokemon-controller')

const query = { name: /atomicmona/i }
// const data = {
//   name: 'Atomicmon',
//   description: 'Vai que vai',
//   type: 'terra',
//   attack: 69,
//   defense: 96,
//   height: 0.7
// }

// CRUD.create(data)

// console.log('--------------------------------------------------------------------')

// const data1 = {
//   name: 'Atomicmon',
//   nome: 'Atomicmon',
//   email: 'seila#dasilva.com.br',
//   description: 'Vai que vai',
//   type: 'terra',
//   attack: 69,
//   defense: 96,
//   height: 0.7
// }

// CRUD.create(data1)
// console.log('--------------------------------------------------------------------')

// const data2 = {
//   name: 'Atomicmon',
//   nome: 'Atomicmon',
//   email: 'teste@gmail.com',
//   description: 'Vai que vai',
//   type: 'terra',
//   attack: 69,
//   defense: 96,
//   height: 0.7
// }

// CRUD.create(data2)
// console.log('--------------------------------------------------------------------')


CRUD.retrieve(query)
