const express = require( 'express' )
const router = express.Router()
const usuarioController = require( './controller' )

function pegarToken ( req, res, next ) {
  const header = req.headers[ 'authorization' ]
  if ( typeof header !== 'undefined' ) {
    req.token = header
    next()
  } else {
    res.sendStatus( 403 )
  }
}

router.post( '/cadastrar', function ( req, res ) {
  const nome = req.body.nome
  const senha = req.body.senha
  console.log( nome, senha )
  usuarioController.save( nome, senha, function ( resp ) {
    res.json( resp )
  } )
} )

router.post( '/login', function ( req, res ) {
  const nome = req.body.nome
  const senha = req.body.senha
  usuarioController.login( nome, senha, function ( resp ) {
    res.json( resp )
  } )
} )

// router.get( '/listar', pegarToken, function ( req, res ) {
router.get( '/listar', function ( req, res ) {
  const token = req.token
  usuarioController.list( token, function ( resp ) {
    res.json( resp )
  } )
} )

module.exports = router
