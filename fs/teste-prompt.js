'use strict'

var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function input (prompt, callback) {
  rl.question(prompt, function (x) {
    rl.close()
    callback(x)
  })
}

function main () {
  input('Number: ', console.log)
}

main()
