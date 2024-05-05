const {createReadStream} = require('fs');

const stream = createReadStream('./contents/bigDataFile.txt');

/* 
-> Default 64kb
-> last buffer - remainder
-> highWaterMark - control size
-> const stream = createReadStream('./contents/bigDataFile.txt',{highWaterMark:90000});
-> const stream = createReadStream('./contents/bigDataFile.txt',{encoding:'utf8'});
*/

stream.on('data',(result)=>{
    console.log(result.length);
    console.log(result);
});

stream.on('error',(error)=>{
    console.log(error);
})