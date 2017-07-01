const fs = require('fs')

/*
fs.readFile('./restaurantes.json', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
*/

var recipe = fs.readFileSync('./restaurantes.json').toString()
var lines = recipe.split(/\r\n|\n|\r/)

var obj = JSON.parse(lines[1])

console.log(obj)
console.log(obj.address)
console.log(obj.address.street)

/*
function readContent(callback) {
    fs.readFile("./restaurantes.json", function (err, content) {
        if (err) return callback(err)
        callback(null, content)
    })
}

readContent(function (err, content) {
    console.log(content)
})
*/

/*
fs.readFile('./restaurantes.json', function (err, data) {
  if (err) throw err;
  console.log(data.toString());
});
*/
