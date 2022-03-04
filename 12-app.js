const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.end('Welceom to our page')
    }
    if (req.url === '/about'){
        res.end('Here is our site history')
    }
    res.end(`
    <h1>Oopss!!!</h1>
    <p>We cant find the page</p>
    <a href="/">Back</a>
    `)
})

server.listen(5000)