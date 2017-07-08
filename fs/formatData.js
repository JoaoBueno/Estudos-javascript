const chooseFormatData = require( './chooseFormatData' )

const formatData = ( data ) => {
  let dataf = data.split( '/' )
  const format = chooseFormatData( data ).toLowerCase()
  if ( format === 'dd/mm/yyyy' ) {
    return dataf[ 1 ] + '/' + dataf[ 0 ] + '/' + dataf[ 2 ]
  }
  else if ( format === 'yyyy/mm/dd' ) {
    return dataf[ 1 ] + '/' + dataf[ 2 ] + '/' + dataf[ 0 ]
  }
  else return dataf[ 0 ] + '/' + dataf[ 1 ] + '/' + dataf[ 2 ]
}

module.exports = formatData
