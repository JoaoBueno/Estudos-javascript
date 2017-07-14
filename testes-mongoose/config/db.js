const mongoose = require( 'mongoose' )
const dbURI = 'mongodb://localhost/mydatabase'
// mongoose.createConnection( dbURI, { server: { poolSize: 4 } } )
// mongoose.createConnection( dbURI, { } )
const con = mongoose.createConnection( dbURI )

con.on( 'connected', function () {
  console.log( 'Mongoose default connection connected to ' + dbURI )
} )

con.on( 'error', function ( err ) {
  console.log( 'Mongoose default connection err ' + err )
} )

con.on( 'disconnected', function () {
  console.log( 'Mongoose default connectios disconnected' )
} )

con.on( 'open', function () {
  console.log( 'Mongoose default connection is open' )
} )

process.on( 'SIGINT', function () {
  con.close( function () {
    console.log( 'Mongoose default connection disconnected through app termination' )
    process.exit( 0 )
  } )
} )
