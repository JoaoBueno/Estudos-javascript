var prompt = require('prompt')

prompt.start()

const theNumber = prompt.get(['numero'], function (err, result) {
  if (err) console.log(err)
  return result.numero
})

if (!isNaN(theNumber)) console.log('Seu número é a raiz quadrada de ' + theNumber * theNumber)
else console.log('Ei! Por que você não me deu um número?')
