const mongoose = require( 'mongoose' )
mongoose.Promise = global.Promise

const dbURI = 'mongodb://localhost/be-mean-instagram'

mongoose.connect( dbURI )

/**
mongoose.connection.on( 'connected', function () {
  console.log( 'Mongoose default connection connected to ' + dbURI )
} )
mongoose.connection.on( 'error', function ( err ) {
  console.log( 'Mongoose default connection error: ' + err )
} )
mongoose.connection.on( 'disconnected', function () {
  console.log( 'Mongoose default connection disconnected' )
} )
// mongoose.connection.on( 'open', function () {
//   console.log( 'Mongoose default connection is open' )
// } )
*/

process.on( 'SIGINT', function () {
  mongoose.connection.close( function () {
    console.log( 'Mongoose default connection disconnected through app termination' )
    process.exit( 0 )
  } )
} )

const Schema = mongoose.Schema
const _schema = {
  username: String,
  password: String,
  endereco: String,
  numero: Number,
  data: Date
}
const schema = new Schema( _schema )

const Model = mongoose.model( 'User', schema )

// const Suissamon = new Model( { name: 'Suissamon', password: '' } )
// Suissamon.save( function ( err, data ) {
//   if ( err ) return console.log( 'ERRO: ', err )
//   return console.log( 'Inseriu:', data )
// } )
// ou
// PokemonModel.create( { name: 'Suissamon' }, function ( err, data ) {
//  if ( err ) return console.log( 'ERRO: ', err )
//  return console.log( 'Inseriu:', data )
// } )

module.exports = Model
