isPrime = require('./isPrime')

n = process.argv.splice(2, process.argv.length -1).join(' ')

console.log(isPrime(n))