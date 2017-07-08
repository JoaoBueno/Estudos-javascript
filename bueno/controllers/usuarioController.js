const Usuario = require( '../models/usuario' )

exports.save = function ( nome, senha, callback ) {
  console.log( nome )
  Usuario.findOne( { 'nome': nome }, function ( err, usuario ) {
    console.log( usuario )
    if ( err ) {
      callback( 'Deu erro ', err )
    } else if ( usuario ) {
      callback( 'Usuario ja existe' )
    } else {
      const novoUsuario = new Usuario()
      novoUsuario.nome = nome
      novoUsuario.senha = novoUsuario.gerarSenha( senha )
      novoUsuario.token = novoUsuario.gerarToken( nome, senha )
      novoUsuario.save( function ( err, usuario ) {
        if ( err ) {
          callback( { error: 'Não foi possível salvar usuário' } )
        } else {
          callback( usuario )
        }
      } )
    }
  } )
}

exports.login = function ( nome, senha, callback ) {
  Usuario.findOne( { 'nome': nome }, function ( err, usuario ) {
    if ( err ) {
      callback( 'Deu erro: ', err )
    } else if ( usuario ) {
      if ( usuario.validarSenha( senha ) ) {
        callback( usuario.token )
      } else {
        callback( 'Senha incorreta' )
      }
    } else {
      callback( 'Usuario não existe' )
    }
  } )
}

exports.list = function ( token, callback ) {
  Usuario.findOne( { 'token': token }, function ( err, usuario ) {
    if ( err ) {
      callback( 'Deu erro', err )
    } else if ( usuario ) {
      callback( usuario.nome )
    } else {
      callback( 'Usuario não encontrado' )
    }
  } )
}

exports.getPermissions = ( token ) =>
  Usuario.findOne( { token } ).exec()
