const findByField = (field) => (value, list) =>
  list.find(obj => obj[ field ] === value)

const findByName = findByField('name')

const list = [
  { id: 1, name: 'Suissa' },
  { id: 2, name: 'Jean' },
  { id: 3, name: 'João' },
  { id: 4, name: 'Carlos' },
  { id: 5, name: 'Bueno' },
  { id: 6, name: 'Masso' }
]

const result = findByName('Bueno', list)

console.log(result)
