const async = require('async')
const mongoose = require('mongoose')
const Usuario = require('./usuario')

const data = [
  {
    nome: 'bueno',
    senha: 'senha',
    permission: {
      read: ['produtos', 'grupos'],
      update: ['produtos'],
      create: ['produtos']
    }
  }
  // {
  //   nome: 'suissa',
  //   senha: 'senha'
  // },
  // {
  //   nome: 'millena',
  //   senha: 'senha'
  // },
  // {
  //   nome: 'gabriela',
  //   senha: 'senha'
  // },
  // {
  //   nome: 'roberio',
  //   senha: 'senha'
  // }
]

mongoose.connect('mongodb://localhost/mydatabase', function(err) {
  if (err) throw err

  async.each(
    data,
    function(item, cb) {
      const novoUsuario = new Usuario()
      console.log('item ', item)
      const user = {
        nome: item.nome,
        senha: novoUsuario.gerarSenha(item.senha),
        token: novoUsuario.gerarToken(item.nome, item.senha),
        permission: item.permission
      }
      console.log('user: ', user)
      Usuario.create(user, cb)
    },
    function(err) {
      if (err) throw err
      const query = Usuario.find({})
      query.sort('nome')
      query.exec(function(err, results) {
        if (err) throw err
        console.log(results)
        mongoose.disconnect()
      })
    }
  )
})
