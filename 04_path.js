// path is a built-in module helping us to work with files and different direct0ry paths



const path = require('path')

console.log(path.sep)

const fileDir = path.join('/test/', 'check.txt')
console.log(fileDir)

const absolute = path.resolve(__dirname, 'test', 'check.txt');

console.log(absolute)