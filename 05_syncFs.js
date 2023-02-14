//The fs readFileSync() method is an inbuilt application programming interface of fs module which is used to read the file and return its content. 


const {readFileSync} = require('fs')

const firstText = readFileSync('./test/first.txt', "utf-8")
const secondText = readFileSync('./test/second.txt', "utf-8")

console.log(firstText)
console.log(secondText)