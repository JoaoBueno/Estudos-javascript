function isPrime (n) {
  for (let i = 2; i < n; i++) {
    // console.log(i)
    if (n % i === 0) return false
  }
  return n !== 1
}

module.exports = isPrime
