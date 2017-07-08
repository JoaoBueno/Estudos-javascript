const Produto = require( './model' )

exports.save = function ( codigo, descricao, preco, callback ) {
  new Produto( {
    'codigo': codigo,
    'descricao': descricao,
    'preco': preco
  } ).save( function ( err, produto ) {
    if ( err ) {
      callback( { error: 'Não foi possívela salvar' } )
    } else {
      callback( produto )
    }
  } )
}

exports.list = function ( callback ) {
  Produto.find( {}, function ( err, produtos ) {
    if ( err ) {
      callback( { error: 'Não foi possível encontrar produtos' } )
    } else {
      callback( produtos )
    }
  } )
}

exports.delete = function ( id, callback ) {
  Produto.findById( id, function ( err, produto ) {
    if ( err ) {
      callback( { error: 'Não foi possível excluir' } )
    } else {
      produto.remove( function ( err ) {
        if ( !err ) {
          callback( { resposta: 'Produto excluido com sucesso' } )
        }
      } )
    }
  } )
}

exports.id = function ( id, callback ) {
  Produto.findById( id, function ( err, produto ) {
    console.log( produto )
    if ( err ) {
      callback( { error: 'Não foi possível encontrar o produto, ', err } )
    } else {
      callback( produto )
    }
  } )
}
