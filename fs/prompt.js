const prompt = require('prompt')
//
// Start the prompt
//
prompt.start()

//
// Get two properties from the user: username and email
//
const input = () => prompt.get(['username', 'email'], function (err, result) {
  //
  // Log the results.
  //
  if (err) console.log(err)
  console.log('Command-line input received:')
  console.log('  username: ' + result.username)
  console.log('  email: ' + result.email)
  return result.username
})

let user = ''
let email = ''

user = input()

console.log('o que voce digitou foi: ', user)
