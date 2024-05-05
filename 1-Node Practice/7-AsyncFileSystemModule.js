const fs = require('fs');

fs.readFile('./contents/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const firstFileData = result;
    fs.readFile('./contents/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const secondFileData = result;
        fs.writeFile('./contents/fourth.txt',`${firstFileData}\n${secondFileData}`,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
        })
    });
});