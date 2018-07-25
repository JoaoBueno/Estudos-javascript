const createArray = (create) => (length) => Array.from({ length }, create)

const createArrayWith = (fn) => ({
  withSize: createArray(fn)
})

const only2 = () => 2
const evens = (v, i) => (i === 0) ? i + 2 : i + (i + 2)
const odds = (v, i) => (i === 0) ? i + 1 : i + (i + 1)

console.log(createArrayWith(only2).withSize(10))
console.log(createArrayWith(odds).withSize(10))
console.log(createArrayWith(evens).withSize(10))
