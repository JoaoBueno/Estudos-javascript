const express = require( 'express' )
const router = express.Router()
const produtoController = require( './controller' )
const usuarioController = require( '../Usuario/controller' )
const { isIn, pegarToken } = require('../../helpers')
const collection = 'produtos'
const HTTP = {
  GET: 'read',
  POST: 'create',
  PUT: 'update',
  DELETE: 'delete'
}

// middleware that is specific to this router - exemplo da express.com
router.use( function timeLog ( req, res, next ) {
  console.log( 'Time: ', Date.now() )
  next()
} )

const middlewarePermission = ( req, res, next ) => {
  const token = pegarToken( req )
  const verb = req.method
  console.log( 'verb:', verb )
  usuarioController.getPermissions( token )
    .then( user => {
      // console.log( 'Usuario: ', user )      
      // console.log( 'Usuario.permission.read: ', user.permission )
      if ( isIn( user.permission[ HTTP[ verb ] ] )( collection ) )
        next()
      else
        res.status( 401 ).json( { mensagem: 'deu erro' } )
    } )
    .catch( err => console.log( 'erro: ', err ) )
}

router.get( '/', middlewarePermission, function ( req, res ) {
  produtoController.list( function ( resp ) {
    res.json( resp )
  } )
} )

router.get( '/:id', middlewarePermission, function ( req, res ) {
  const id = req.params.id
  console.log( id )
  produtoController.id( id, function ( resp ) {
    res.json( resp )
  } )
} )

router.post( '/', middlewarePermission, function ( req, res ) {
  const codigo = req.body.codigo
  const descricao = req.body.descricao
  const preco = req.body.preco
  produtoController.save( codigo, descricao, preco, function ( resp ) {
    res.json( resp )
  } )
} )

router.delete( '/:id', middlewarePermission, function ( req, res ) {
  const id = req.params.id
  produtoController.delete( id, function ( resp ) {
    res.json( resp )
  } )
} )

module.exports = router
