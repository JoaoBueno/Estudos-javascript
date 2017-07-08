const server = require( './config/server_config' )
const db = require( './config/db_config' )
const Produto = require( './models/produto' )
// const produtoController = require('./controllers/produtoController' )
const produtos = require( './routes/produtoRoutes' )
const usuarios = require( './routes/usuarioRouter' )

server.get( '/', function ( req, res ) {
  res.json( { nomeApi: 'Api João Bueno' } )
} )

// Rotas de produtos
server.use( '/produtos', produtos )
server.use( '/usuarios', usuarios )

// Rotas de produtos - Colocadas em routes/produtoRoutes
// server.get('/produtos', function( req, res ){
//    produtoController.list( function( resp ){
//        res.json( resp )
//    } )
// } )
//
// server.post('/produtos', function( req, res ){
//    const codigo = req.body.codigo
//    const descricao = req.body.descricao
//    const preco = req.body.preco
//    produtoController.save( codigo, descricao, preco, function( resp ){
//        res.json( resp );            
//    } )
// } )
//
// server.delete('/produtos/:id', function( req, res ){
//    const id = req.params.id
//    produtoController.delete( id, function( resp ){
//        res.json( resp )
//    } )
// } )
