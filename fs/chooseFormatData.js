const chooseFormatData = ( data ) => {
  let dataf = data.split( '/' )
  if ( dataf[ 0 ].length === 4 ) return 'yyyy/mm/dd'
  else if ( parseInt( dataf[ 0 ] ) > 12 ) return 'dd/mm/yyyy'
  return 'mm/dd/yyyy'
}

module.exports = chooseFormatData
