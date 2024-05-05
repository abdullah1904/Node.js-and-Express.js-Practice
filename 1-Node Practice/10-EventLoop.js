/*
const {readFile, read} = require('fs');

console.log("Started a First Task");
readFile('./contents/fourth.txt','utf8',(err,res)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(res);
    console.log('Completed First Task');
});
console.log("Started Next Task");
*/

/*
console.log("First");
setTimeout(()=>{
    console.log("Second");
},0);
console.log("Third");
*/

/*
setInterval(()=>{
    console.log("Hello World!");
},2000);
console.log("I'll Run First");
*/

const http = require("http");

const server = http.createServer((req,res)=>{
    console.log('Request Event');
    res.end("Hello World");
});

server.listen(511,()=>{
    console.log("Server Listening on Port: 511");
});