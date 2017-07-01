var array = []

function range (arr) {
  console.log(arr)
  var lower = Math.min(arr[0], arr[1])
  var upper = Math.max(arr[0], arr[1])

  for (var i = lower; i <= upper; i++) {
    array.push(i)
  }
}

function sum (array) {
  for (var i = 0; i < array.length; i++) {
    var total = total + array[i]
  }
}

console.log(range([1, 10]))
console.log(array)

console.log(array.length)

console.log(sum(range([1, 10])))
