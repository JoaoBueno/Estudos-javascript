const times = y => x => x * y
const double = times(2)
const triple = times(3)
const tenTimes = times(10)

double(2)
triple(3)
tenTimes(10)

const timess = y => x => {
  for (let i = 1; i < x; i++) {
    y += y
  }
  //    return y;
}

const doubles = timess(2)
console.log(doubles(1))
console.log(doubles(1))
console.log(doubles(2))
console.log(doubles(3))

const soma = y => x => x + y
const soma2 = soma(2)

soma2(2)

// Fatorial
function fac (n) {
  if (n === 0) return 1
  else return n * fac(n - 1)
}

console.log(fac(5))

const fact = n => {
  if (n === 0) return 1
  else return n * fact(n - 1)
}

// Multiplica
const multi = (a, b) => {
  console.log(a, b)
  if (b === 1) return a
  return a + multi(a, --b)
}

// Divide
const divide = (a, b) => {
  if (b === 1) return a
  return a - divide(a, --b)
}

// teste
const divisao = (a, b, i) => {
  if (a < b) return 'O resultado da divisão é: " + i + " e o resto é: ' + a
  else return divisao(a - b, b, i + 1)
}
