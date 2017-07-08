const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const ProdutoSchema = new Schema( {
  codigo: String,
  descricao: String,
  preco: String
} )

module.exports = mongoose.model( 'Produto', ProdutoSchema )
