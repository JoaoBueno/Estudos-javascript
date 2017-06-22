isPrime = require('./isPrime')

n = process.argv.splice(2, process.argv.length -1).join(' ')

if (!isNaN(parseFloat(n)) && isFinite(n))
    console.log(isPrime(n))
else
    console.log("Use: testaPrimo 7")    