const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const CollecSchema = new Schema( {
  collec: String,
} )

module.exports = mongoose.model( 'Collec', CollecSchema )
