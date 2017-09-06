'use strict'

const promiseAll = require( './promise-all' )
const readFile = require( './fs-promise' )

promiseAll( [
  readFile( './restaurantes.json' )
] )
  .then( res => console.log( res ) )
  .catch( err => console.error( err ) )
