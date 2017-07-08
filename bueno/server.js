const server = require( './config/server_config' )
const db = require( './config/db_config' )
const produtos = require( './modules/Produto/routes' )
const usuarios = require( './modules/Usuario/router' )

server.get( '/', function ( req, res ) {
  res.json( { nomeApi: 'Api João Bueno' } )
} )

// Rotas
server.use( '/produtos', produtos )
server.use( '/api/usuarios', usuarios )
