// Divide
// const divide = (a, b) => {
//     console.log(a, b);
//     if (a < b)
//         return i;
//     return divide(a - b, b);
// }
//
// console.log(divide(10, 2));

const divide = (a, b) => {
  console.log(a, b)
  if (a === 0) return 0
  return a - divide(--a, b)
}

console.log(divide(10, 2))
