const fun1 = (...theArgs) => {
  console.log(theArgs.length, theArgs)
}

fun1()  // 0
fun1(5) // 1
fun1(5, 6, 7) // 3
fun1(1, 2, 3, 4, 5, 6, 7) // 3
