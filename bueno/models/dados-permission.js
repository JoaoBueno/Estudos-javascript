const async = require( 'async' )
const mongoose = require( 'mongoose' )
const Permission = require( './permission' )
const Usuario = require( './usuario' )
const Collec = require( './collec' )

Usuario.getId = function ( nome, callback ) {
  Usuario.findOne( { 'nome': nome }, function ( err, usuario ) {
    if ( err ) {
      callback( 'Deu erro', err )
    } else if ( usuario ) {
      console.log( usuario.id )
      callback( usuario.id )
    } else {
      callback( 'Usuario não encontrado' )
    }
  } )
}

Collec.getId = function ( collec, callback ) {
  Collec.findOne( { 'collec': collec }, function ( err, collec ) {
    if ( err ) {
      callback( 'Deu erro', err )
    } else if ( collec ) {
      console.log( collec.id )
      callback( collec.id )
    } else {
      callback( 'Coleção não encontrado' )
    }
  } )
}

const data = [
  {
    user: 'bueno',
    collec: 'usuario',
    permission: [ 1, 1, 1, 1 ]
  },
  {
    user: 'bueno',
    collec: 'produto',
    permission: [ 1, 1, 1, 1 ]
  },
  {
    user: 'bueno',
    collec: 'grupo',
    permission: [ 1, 1, 1, 1 ]
  },
  {
    user: 'bueno',
    collec: 'subgrupo',
    permission: [ 1, 1, 1, 1 ]
  },
  {
    user: 'bueno',
    collec: 'categoria',
    permission: [ 1, 1, 1, 1 ]
  },
  {
    user: 'suissa',
    collec: 'usuario',
    permission: [ 1, 1, 1, 0 ]
  },
  {
    user: 'suissa',
    collec: 'produto',
    permission: [ 1, 1, 1, 0 ]
  },
  {
    user: 'suissa',
    collec: 'grupo',
    permission: [ 1, 1, 1, 0 ]
  },
  {
    user: 'suissa',
    collec: 'subgrupo',
    permission: [ 1, 1, 1, 0 ]
  },
  {
    user: 'suissa',
    collec: 'categoria',
    permission: [ 1, 1, 1, 0 ]
  },
  {
    user: 'millena',
    collec: 'usuario',
    permission: [ 0, 0, 1, 0 ]
  },
  {
    user: 'millena',
    collec: 'produto',
    permission: [ 0, 0, 1, 0 ]
  },
  {
    user: 'millena',
    collec: 'grupo',
    permission: [ 0, 0, 1, 0 ]
  },
  {
    user: 'millena',
    collec: 'subgrupo',
    permission: [ 0, 0, 1, 0 ]
  },
  {
    user: 'millena',
    collec: 'categoria',
    permission: [ 0, 0, 1, 0 ]
  },
  {
    user: 'gabriela',
    collec: 'usuario',
    permission: [ 0, 0, 0, 0 ]
  },
  {
    user: 'gabriela',
    collec: 'produto',
    permission: [ 0, 0, 0, 0 ]
  },
  {
    user: 'gabriela',
    collec: 'grupo',
    permission: [ 0, 0, 0, 0 ]
  },
  {
    user: 'gabriela',
    collec: 'subgrupo',
    permission: [ 0, 0, 0, 0 ]
  },
  {
    user: 'gabriela',
    collec: 'categoria',
    permission: [ 0, 0, 0, 0 ]
  },
  {
    user: 'roberio',
    collec: 'usuario',
    permission: [ 0, 0, 0, 0 ]
  },
  {
    user: 'roberio',
    collec: 'produto',
    permission: [ 0, 0, 0, 0 ]
  },
  {
    user: 'roberio',
    collec: 'grupo',
    permission: [ 0, 0, 0, 0 ]
  },
  {
    user: 'roberio',
    collec: 'subgrupo',
    permission: [ 0, 0, 0, 0 ]
  },
  {
    user: 'roberio',
    collec: 'categoria',
    permission: [ 0, 0, 0, 0 ]
  }
]

mongoose.connect( 'mongodb://localhost/mydatabase', function ( err ) {
  if ( err ) throw err

  async.each( data, function ( item, cb ) {
    const novaPermission = new Permission()
    novaPermission.user = Usuario.getId( item.user )
    novaPermission.collec = Collec.getId( item.collec )
    novaPermission.permission = item.permission
    console.log( novaPermission )
    Usuario.create( novaPermission, cb )
  }, function ( err ) {
    if ( err ) throw err
    const query = Permissio.find( {} )
    query.exec( function ( err, results ) {
      if ( err ) throw err
      console.log( results )
      mongoose.disconnect()
    } )
  } )
} )
