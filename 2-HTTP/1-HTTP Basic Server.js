const http = require('http');

const server = http.createServer((req,res)=>{
    console.log("User Hits the Server");
    res.end("Home Page");
}).listen(8080);