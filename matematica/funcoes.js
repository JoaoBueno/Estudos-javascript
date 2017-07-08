// O que é isso?
const oQueEIsso = ( n ) => {
  let m = n
  let i = 1
  let c = 0
  while ( m > 0 ) {
    m = m - i
    i = i + 2
    c = c + 1
  //    console.log( m, i, c )
  }
  if ( m === 0 ) return c
  return '~' + c
}

// Divide
const divide = ( a, b ) => {
//   console.log( a, b )
  if ( a === 0 ) return 0
  return a - divide( --a, b )
}

// Multiplica
const multiplica = ( a, b ) => {
//   console.log( a, b )
  if ( b === 1 ) return a
  return a + multiplica( a, --b )
}

// Fatorial
function fac ( n ) {
  if ( n === 0 ) return 1
  else return n * fac( n - 1 )
}

module.exports.oQueEIsso = oQueEIsso
module.exports.divide = divide
module.exports.multiplica = multiplica
module.exports.fac = fac
