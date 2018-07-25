// O que é isso?
const oQueEIsso = n => {
  let m = n
  let i = 1
  let c = 0
  while (m > 0) {
    m = m - i
    i = i + 2
    c = c + 1
    console.log( m, i, c )
  }
  if (m === 0) return c
  return '~' + (c - 1)
}

const n = process.argv.splice(2, process.argv.length - 1).join(' ')

if (!isNaN(parseFloat(n)) && isFinite(n)) console.log('O resultado é : ' + oQueEIsso(n))
else console.log('Use: oqueeisso 100')
