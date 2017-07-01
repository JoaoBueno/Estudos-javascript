function findSolution (target) {
  function find (start, history) {
    console.log('find(' + start + ',' + history + ')')
    if (start === target) return history
    else if (start > target) return null
    else {
      return (
        find(start + 5, '(' + history + ' + 5)') ||
        find(start * 3, '(' + history + ' * 3)')
      )
    }
  }
  return find(1, '1')
}

console.log(findSolution(127))
