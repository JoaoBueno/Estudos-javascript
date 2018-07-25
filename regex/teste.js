const fs = require('fs')

const begin = '|'
const removingThis = '|DT'
const file = './input.txt'

const readFile = file => fs.readFileSync(file, { encoding: 'utf8' })
const splitingByLines = text => text.split('\n')
const splitByColumn = text => text.split('|')
const forGetColumns = line => line.startsWith('|DT')

const toColumns = line => line.split('|').map(col => col.trim()).filter(col => col != '')

const getHeader = text => splitingByLines(text).filter(forGetColumns).map(toColumns)[0]

const fileOpen = readFile(file)
const header = getHeader(fileOpen)

const filterMyLinesWith = (begin, removingThis) => list =>
  list.filter(line => line.startsWith(begin) && !line.startsWith(removingThis)).map(line => line.replace('\r', '')).map(line => {
    const columns = splitByColumn(line).slice(1).map(col => col.trim())

    return {
      [header[0]]: columns[0],
      [header[1]]: columns[1],
      [header[2]]: columns[2],
      [header[3]]: columns[3],
      [header[4]]: columns[4],
      [header[5]]: columns[5],
      [header[6]]: columns[6],
      [header[7]]: columns[7],
      [header[8]]: columns[8],
      [header[9]]: columns[9],
      [header[10]]: columns[10]
    }
  })

const getLinesWith = (begin, removingThis) => file => filterMyLinesWith(begin, removingThis)(splitingByLines(readFile(file)))

const result = getLinesWith(begin, removingThis)(file)

console.log(result)
