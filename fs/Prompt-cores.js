var prompt = require('prompt')
var colors = require('colors/safe')
//
// Setting these properties customizes the prompt.
//
prompt.message = colors.rainbow('Question!')
prompt.delimiter = colors.green('><')

prompt.start()

prompt.get(
  {
    properties: {
      name: {
        description: colors.yellow('What is your name?')
      }
    }
  },
  function (err, result) {
    if (err) console.log(err)
    console.log(colors.cyan('You said your name is: ' + result.name))
  }
)
