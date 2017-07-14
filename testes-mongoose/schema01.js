const mongoose = require( 'mongoose' )

const Schema = mongoose.Schema

const testeSchema = new Schema( {
  name: String,
  description: String,
  type: String,
  attack: Number,
  defense: Number,
  height: Number
} )

module.exports = testeSchema
