const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema
const Usuario = require( './usuario' )
const Collec = require( './collec' )

const PermissionSchema = new Schema( {
  user: [{ type: Schema.Types.ObjectId, ref: 'Usuario' }],
  collec: [{ type: Schema.Types.ObjectId, ref: 'Collec' }],
//permission: [inc, alt, con, exc]  
  permission: [String]
} )

module.exports = mongoose.model( 'Permission', PermissionSchema )
