const getCpfToCheck = ( cpf ) => ( cpf.map ) ? cpf.slice( 0, 9 ) : cpf.substr( 0, 9 ).split( '' )

const cpf1 = getCpfToCheck( '07468287805' )

console.log( cpf1 )


