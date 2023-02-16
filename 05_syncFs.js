//The fs readFileSync() method is an inbuilt application programming interface of fs module which is used to read the file and return its content. 


const {readFileSync, writeFileSync,} = require('fs')

const firstText = readFileSync('./test/first.txt', "utf-8")
const secondText = readFileSync('./test/second.txt', "utf-8")

// console.log(firstText)
// console.log(secondText)


//the fs writeFileSync() method do write on mention file path. And if the is no any txt file exist on that path, it creates one

writeFileSync(
    './test/third.txt', `It writes: ${firstText} and ${secondText}`
)