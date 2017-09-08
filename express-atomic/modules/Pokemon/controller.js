'use strict'

const Schema = require('./schema')
const Model = require('./model')(Schema, 'Pokemon')

const CRUD = {
  create: function(data) {
    console.log('data', data)
    return Model.create(data)
  },

  retrieve: function(query) {
    return Model.find(query).exec()
  },

  update: function(query, mod, options) {
    console.log('query', query)
    console.log('mod', mod)
    options = options || {}
    return Model.update(query, mod, options).exec()
  },
  delete: function(query) {
    return Model.remove(query).exec()
  }
}

module.exports = CRUD