const mongoose = require( 'mongoose' )

const urlString = 'mongodb://localhost/mydatabase'

// mongoose.createConnection( urlString, function ( err, res ) {
mongoose.connect( urlString, function ( err, res ) {
  if ( err ) {
    console.log( 'Não foi possível conectar a: ' + urlString )
  } else {
    console.log( 'Db Conectado a: ' + urlString )
  }
} )
