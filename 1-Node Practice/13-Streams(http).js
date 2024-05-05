const http = require('http');
const fs = require('fs');

// http.createServer((req,res)=>{
//     const text = fs.readFileSync('./contents/bigDataFile.txt','utf8');
//     res.end(text);
// }).listen(8080);

http.createServer((req,res)=>{
    const fileStream = fs.createReadStream('./contents/bigDataFile.txt','utf8');
    fileStream.on('open',()=>{
        fileStream.pipe(res);
    })
    fileStream.on('error',(err)=>{
        res.end(err);
    })
}).listen(8080);