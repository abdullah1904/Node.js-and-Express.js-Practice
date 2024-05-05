const {readFile} = require('fs');

const getData = (path)=>{
    return new Promise((resolve, reject) => {
        readFile(path,'utf8',(err,res)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(res);
            }
        });
    })
}

getData('./contents/first.txt')
.then((res)=>console.log(res))
.catch((err)=>console.log(err));

getData('./contents/second.txt')
.then((res)=>console.log(res))
.catch((err)=>console.log(err));