var prompt = require('prompt')

prompt.message = ''

var schema = {
  properties: {
    name: {
      pattern: /^[a-zA-Z\s-]+$/,
      message: 'Name must be only letters, spaces, or dashes',
      required: true
    },
    password: {
      hidden: true
    }
  }
}

//
// Start the prompt
//
prompt.start()

//
// Get two properties from the user: email, password
//
prompt.get(schema, function (err, result) {
  //
  // Log the results.
  //
  if (err) console.log(err)
  console.log('Command-line input received:')
  console.log('  name: ' + result.name)
  console.log('  password: ' + result.password)
})
