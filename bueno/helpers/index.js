const isIn = ( list ) => ( value ) =>
  list.findIndex( v => value === v ) >= 0


const pegarToken = ( req ) => {
  const header = req.headers[ 'authorization' ]
  if ( typeof header !== 'undefined' ) {
    return header
  } else {
    throw new Error( 'Token indefinido' )
  }
}

module.exports = { isIn, pegarToken }
