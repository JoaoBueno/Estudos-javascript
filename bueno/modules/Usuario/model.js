const mongoose = require( 'mongoose' )
const bcrypt = require( 'bcrypt-nodejs' )
const jwt = require( 'jsonwebtoken' )
const Schema = mongoose.Schema

const UsuarioSchema = new Schema( {
  nome: String,
  senha: String,
  token: String,
  permission: {
    create: [ String ],
    update: [ String ],
    delete: [ String ],
    read: [ String ]
  }
} )

UsuarioSchema.methods.gerarSenha = function ( senha ) {
  return bcrypt.hashSync( senha, bcrypt.genSaltSync( 9 ) )
}

UsuarioSchema.methods.validarSenha = function ( senha ) {
  return bcrypt.compareSync( senha, this.senha )
}

UsuarioSchema.methods.gerarToken = function ( nome, senha ) {
  return jwt.sign( { 'nome': nome, 'senha': senha }, 'segredo' )
}

module.exports = mongoose.model( 'Usuario', UsuarioSchema )
