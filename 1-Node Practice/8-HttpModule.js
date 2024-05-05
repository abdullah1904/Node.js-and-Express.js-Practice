const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("Welcome to Home Page");
    }
    if(req.url === '/about'){
        res.end('I am Abdullah');
    }
    else{
        res.end(`<h1>Oops! <br/>Requested url not exists</h1>`);
    }
});

server.listen(500);