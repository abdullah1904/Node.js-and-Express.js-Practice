// Blocking Code
const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("Home Page");
    }
    if(req.url === '/about'){
        for(let i=0;i<100;i++){
            for(let j=0;j<100;j++){
                console.log(i,j);
            }
        }
        res.end("About Page");
    }
    res.end("Error Page");
});

server.listen(511,()=>{
    console.log("Server is listening on port 511");
});