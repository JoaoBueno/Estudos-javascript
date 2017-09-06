'use strict'

const readFile = require( './fs-promise' )

const success = ( data ) => {
  console.log( data )
}

const error = ( err ) => {
  console.error( err )
}

readFile( './restaurantes.json' )
  .then( ( data ) => {
    success( data )
  } )
  .catch( ( err ) => {
    error( err )
  } )

readFile( './perso.json' )
  .then( success, error )
