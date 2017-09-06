const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GrupoSchema = new Schema({
  codigo: String,
  descricao: String,
  subGrupo: [
    {
      codigo: String,
      descricao: String
    }
  ]
})

module.exports = mongoose.model('Grupo', GrupoSchema)
