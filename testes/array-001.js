const list = [
  { id: 1, name: 'Suissa' },
  { id: 2, name: 'Jean' },
  { id: 3, name: 'João' },
  { id: 4, name: 'Carlos' },
  { id: 5, name: 'Bueno' },
  { id: 6, name: 'Masso' }
]

const result = list.find(obj => obj.name === 'Bueno')
console.log(result) // { id: 5, name: 'Bueno' }
