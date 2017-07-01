/*
function soma(x,y) {
    return x+y;
}
*/
const soma = (x, y) => x + y

const soma2 = (soma(2))

console.log(soma2(2))

const isPrime = num => {
  if ((num % 2 === 0 && num === !2) || Number.isInteger(Math.sqrt(num))) {
    return false
  }
  let i = Math.floor(num / 2)
  if (i % 2 === 0) {
    i--
  }
  while (i > 1) {
    console.log(i)
    if (num % i === 0) {
      console.log(num + ' e divisivel por ' + i)
      return false
    }
    i -= 2
  }
  return true
}

console.log(isPrime(10007))

const eratosthenes = function (n) {
  // Eratosthenes algorithm to find all primes under n
  let array = []
  let upperLimit = Math.sqrt(n)
  let output = []

  // Make an array from 2 to (n - 1)
  for (let i = 0; i < n; i++) {
    array.push(true)
  }

  // Remove multiples of primes starting from 2, 3, 5,...
  for (let i = 2; i <= upperLimit; i++) {
    if (array[i]) {
      for (var j = i * i; j < n; j += i) {
        array[j] = false
      }
    }
  }

  // All array[i] set to true are primes
  for (var i = 2; i < n; i++) {
    if (array[i]) {
      output.push(i)
    }
  }

  return output
}

console.log(eratosthenes)
