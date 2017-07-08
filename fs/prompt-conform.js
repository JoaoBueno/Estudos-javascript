const prompt = require( 'prompt' )
const Controller = require( './controller' )
const formatData = require( './formatData' )

//
// Start the prompt
//
prompt.start()

//
// Get two properties from the user: username and password
//

let resultado = {}

prompt.get(
  [
    {
      name: 'username',
      required: true,
      conform: function ( value ) {
        console.log( 'conform: ', value )
        resultado.username = value
        return true
      }
    },
    {
      name: 'password',
      hidden: true,
      conform: function ( value ) {
        console.log( 'conform: ', value )
        resultado.password = value
        return true
      }
    },
    {
      name: 'endereco',
      conform: function ( value ) {
        console.log( 'conform: ', value )
        resultado.endereco = value
        return true
      }
    },
    {
      name: 'numero',
      conform: function ( value ) {
        console.log( 'conform: ', value )
        resultado.numero = value
        return true
      }
    },
    {
      name: 'data',
      conform: function ( value ) {
        resultado.data = formatData( value )
        console.log( 'conform: ', resultado.data )
        return true
      }
    }
  ],
  function ( err, result ) {
    //
    // Log the results.
    //
    if ( err ) throw err
    console.log( 'Command-line input received:' )
    console.log( '  username: ' + result.username )
    console.log( '  password: ' + result.password )
    
    console.log( 'resultado = ', resultado )
    Controller.create( resultado )
      .then( data => {
        console.log( 'Inseriu ', data )
        process.exit( 0 )
      } )
      .catch( err => {
        console.log( 'Erro ', err )
        process.exit( 0 )
      } )
  }
)
