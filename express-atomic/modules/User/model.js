const fs = require('fs')
const path = require('path')

module.exports = function() {
  const mongoose = require('mongoose')
  const Schema = require('./schema')
  const ModelName = 'User'
  const MODULES_PATH = './..'
//   const M = fs.readdirSync(MODULES_PATH)
//   .filter( (file) => (file.startsWith('_') || file.startsWith('.'))
//                       ? false
//                       : fs.statSync( path.join(MODULES_PATH, file) )
//                           .isDirectory()
// )
  //  console.log('M', __filename.split('modules')[1].split('model.js'))
   console.log('M', __filename.split('modules')[1].split('model.js')[0].replace(/\W/gi, ''))
  return mongoose.model(ModelName, Schema)
}
