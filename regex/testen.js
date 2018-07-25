const fs = require('fs')

const begin = '|'
const removingThis = '|DT'
const file = './b.txt'

const readFile = file => fs.readFileSync(file, { encoding: 'utf8' })
const splitingByLines = text => text.split('\n')
const splitByColumn = text => text.split('|')
const forGetColumns = line => line.startsWith('|DT')

const toColumns = line => line.split('|').map(col => col.trim()).filter(col => col !== '')

const getHeader = text => splitingByLines(text).filter(forGetColumns).map(toColumns)[0]

const fileOpen = readFile(file)
const header = getHeader(fileOpen)

const toFormatedText = columns => (obj, header, i) => Object.assign(obj, { [header]: columns[i] })

const getColumns = line => splitByColumn(line).slice(1).map(col => col.trim())

const filterMyLinesWith = (begin, removingThis) => list =>
  list
    .filter(line => line.startsWith(begin) && !line.startsWith(removingThis))
    .map(line => line.replace('\r', ''))
    .map(line => header.reduce(toFormatedText(getColumns(line)), {}))

const getLinesWith = (begin, removingThis) => file => filterMyLinesWith(begin, removingThis)(splitingByLines(readFile(file)))

const result = getLinesWith(begin, removingThis)(file)

console.log(result)
