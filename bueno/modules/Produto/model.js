const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProdutoSchema = new Schema({
  codigo: String,
  descricao: String,
  preco: String,
  Grupo: [{ type: Schema.Types.ObjectId, ref: 'Grupo' }],
  Categoria: [{ type: Schema.Types.ObjectId, ref: 'Categoria' }]
})

module.exports = mongoose.model('Produto', ProdutoSchema)
