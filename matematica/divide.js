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
// possível implementação..
// sem erros...
function div(N, D) {
	return D === 0 || N < D 
		? 0
		: N - D === 0
			? 1
			: 1 + div(N-D, D)
 }

console.log(
	div(10, 5) === 2,  // true
	div(10, 1) === 10 // true
);
