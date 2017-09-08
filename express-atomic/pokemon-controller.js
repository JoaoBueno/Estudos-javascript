'use strict'

const Schema = require('./schema')
const Model = require('./model')(Schema, 'Pokemon')

const CRUD = {
  create: function(data) {
    console.log('data', data)
    const Suissamon = new Model(data)
    console.log('suissamon', Suissamon)
    Suissamon.save(function(err, data) {
      if (err) return console.log('Erro:', err)
      return console.log('Inseriu:', data)
    })
  },

  retrieve: function(res, query) {
    // console.log('res', res)
    Model.find(query).exec()
        .then(data => res.json(data))
        .catch(err => res.json(err))
  },

  update: function(query, mod, options) {
    options = options || {}
    Model.update(query, mod, options, function(err, data) {
      if (err) return console.log('Erro:', err)
      return console.log('Alterou:', data)
    })
  },
  delete: function(query) {
    Model.remove(query, function(err, data) {
      if (err) return console.log('Erro:', err)
      return console.log('Deletou:', data)
    })
  }
}

module.exports = CRUD
