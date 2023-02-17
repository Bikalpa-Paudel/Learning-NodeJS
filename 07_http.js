const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end(`<p> this is home page! </p>
        <a href='/about'> Go to about! </a>
        `)
    }

    if(req.url === '/about'){
        res.end(`<p>this is about page!! </p>
        <a href='/'>back to home </a>
        `)
    }

    // else{
    //     res.end(`
    //     <h1>Oopss!!</h1>
    //     <p> Something went wrong </p>
    //     <a href="/">Return To Home </a>
    // `)}
})
server.listen(5000)