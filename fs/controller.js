const Model = require( './model' )

const create = ( data ) => {
  return Model.create( data )
/*  , function ( err, data ) {
    if ( err ) return console.log( 'ERRO: ', err )
    console.log( 'Inseriu:', data )
    process.exit( 0 ) 
  } )
*/
}

const Controller = {
    create
}

module.exports = Controller
