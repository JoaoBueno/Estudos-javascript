// function todosIguais ( array ) {
//   const filtra = array.filter( function ( elem, pos, arr ) {
//     return arr.indexOf( elem ) == pos
//   } )
//   return filtra.length === 1
// }

// todosIguais = ( array ) => {
//   const filtra = array.filter( function ( elem, pos, arr ) {
//     return arr.indexOf( elem ) == pos
//   } )
//   return filtra.length === 1
// }

// todosIguais = ( array ) => {
//   const filtra = array.filter( ( elem, pos, arr ) => {
//     return arr.indexOf( elem ) == pos
//   } )
//   return filtra.length === 1
// }

todosIguais = ( array ) => {
  const filtra = array.filter( ( elem, pos, arr ) => {
    console.log( elem, pos, arr )
    return arr.indexOf( elem ) == pos
  } )
  console.log( filtra )
  return filtra.length === 1
}

console.log( todosIguais( [ 1, 2, 3 ] ) )
console.log( todosIguais( [ 0, 1, 2 ] ) )
console.log( todosIguais( [ 0, 2, 3 ] ) )
console.log( todosIguais( [ 1, 1, 1, 1 ] ) )
console.log( todosIguais( [ 4, 4, 4, 4, 3 ] ) )