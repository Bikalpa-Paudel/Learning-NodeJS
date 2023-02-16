const {readFile, writeFile} = require('fs');
console.log('starting')
readFile('./test/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return;
    }
    const firstText = result;
    console.log(firstText);
    

    readFile('./test/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err)
            return;
        }
        const secondText = result;
        console.log(secondText);
        
        writeFile(
            './test/fourth.txt', `It writes: ${firstText} and ${secondText}`,
            (err,result) => {
                if(err){
                    console.log(err)
                    return;
                }
                console.log(result)
            }
            )
    })
})
