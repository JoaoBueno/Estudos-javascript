const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategoriaSchema = new Schema({
  codigo: String,
  descricao: String
})

module.exports = mongoose.model('Categoria', CategoriaSchema)
