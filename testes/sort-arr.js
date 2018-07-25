var someArray = [
  {
    id: 2,
    name: 'gamma'
  },
  {
    id: 3,
    name: 'alpha'
  },
  {
    id: 1,
    name: 'beta'
  },
  {
    id: 4,
    name: 'alba'
  }
]

var sortByProperty = function (property) {
  console.log(property)
  return function (x, y) {
    console.log(x[property], y[property])
    console.log(x[property] === y[property] ? 0 : x[property] > y[property] ? 1 : -1)
    return x[property] === y[property] ? 0 : x[property] > y[property] ? 1 : -1
  }
}

someArray.sort(sortByProperty('id'))

console.log(someArray)
