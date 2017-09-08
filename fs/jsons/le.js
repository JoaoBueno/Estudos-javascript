const fs = require('fs')

files = fs.readdirSync('./schemas/')

//console.log(files)

files.forEach(function(element) {
  console.log(element)  

  let recipe = fs.readFileSync('./schemas/' + element).toString()
  
  let obj = JSON.parse(recipe)
  
  const toMolecule = (obj, field) => {
    const _field = require('./atoms/' + field.atom)
    obj[field.name] = _field
    return obj
  }
  
  const createMolecule = structure => {
    const _schema = structure.reduce(toMolecule, {})
    return _schema
  }
  
  const molecule = createMolecule(obj.structure)
  
  console.log(molecule)
  console.log('---------------------------------------------------')
  
}, this);
