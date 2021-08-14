const createArray = (create) => (length) => Array.from({ length }, create)

const createArrayWith = (fn) => ({
  withSize: createArray(fn)
})

const only2 = () => 2
const evens = (v, i) => (i === 0) ? i + 2 : i + (i + 2)
const odds = (v, i) => (i === 0) ? i + 1 : i + (i + 1)


console.log(odds(10,1))

console.log(createArrayWith(only2).withSize(20))
console.log(createArrayWith(odds).withSize(20))
console.log(createArrayWith(evens).withSize(20))
