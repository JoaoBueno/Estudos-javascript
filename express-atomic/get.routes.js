const MODULES_PATH = './modules/'

module.exports = (_module, i) => {
  let path = '/api/' + _module.toLowerCase()
  if (!path.endsWith('s')) path += 's'

  // console.log('return', 
  // {
  //   path,
  //   module: MODULES_PATH + _module + '/routes'
  // })
  return {
    path,
    module: MODULES_PATH + _module + '/routes'
  }
}
