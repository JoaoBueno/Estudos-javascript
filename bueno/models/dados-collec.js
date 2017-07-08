const async = require( 'async' )
const mongoose = require( 'mongoose' )
const Collec = require( './collec' )

const data = [
  {
    collec: 'usuario'
  },
  {
    collec: 'produto'
  },
  {
    collec: 'grupo'
  },
  {
    collec: 'subgrupo'
  },
  {
    collec: 'categoria'
  }
]

mongoose.connect( 'mongodb://localhost/mydatabase', function ( err ) {
  if ( err ) throw err

  async.each( data, function ( item, cb ) {
    Collec.create( item, cb )
  }, function ( err ) {
    if ( err ) throw err
    const query = Collec.find( {} )
    query.sort( 'collec' )
    query.exec( function ( err, results ) {
      if ( err ) throw err
      console.log( results )
      mongoose.disconnect()
    } )
  } )
} )
