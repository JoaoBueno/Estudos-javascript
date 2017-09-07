const mongoose = require('mongoose')
const Schema = mongoose.Schema

const structure = [
  { name: 'name', atom: 'name' },
  { name: 'nome', atom: 'name' },
  { name: 'email', atom: 'email' },
  { name: 'description', atom: 'description' },
  { name: 'type', atom: 'type' },
  { name: 'attack', atom: 'attack' },
  { name: 'defense', atom: 'defense' },
  { name: 'height', atom: 'height' },
  { name: 'created_at', atom: 'created_at' }
]

// const toMolecule = ( obj, field ) => {
//   const _field = require( './fields/fields-' + field )
//   obj[ field ] = _field
//   return obj
// }

const toMolecule = (obj, field) => {
  const _field = require('./atoms/' + field.atom)
  obj[field.name] = _field
  return obj
}

const createMolecule = structure => {
  const _schema = structure.reduce(toMolecule, {})
  return _schema
}

const molecule = createMolecule(structure)
// console.log('molecule', molecule)
module.exports = new Schema(molecule)
