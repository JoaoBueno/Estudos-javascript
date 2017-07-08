const prompt = require('prompt')
//
// Start the prompt
//

let user = ''
//let email = ''

//
// Get two properties from the user: username and email
//
const input = () => {
  let resultado = {}
  prompt.start()
  prompt.get(['username', 'email'], function (err, result) {
    //
    // Log the results.
    //
    if (err) return console.log(err)
    console.log('result: ', result)
    console.log('Command-line input received:')
    console.log('  username: ' + result.username)
    console.log('  email: ' + result.email)
    resultado = result
  })
  return resultado
}

user = input()

console.log('o que voce digitou foi: ', user)
