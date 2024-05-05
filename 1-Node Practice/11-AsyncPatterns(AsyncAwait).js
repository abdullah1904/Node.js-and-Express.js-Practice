const {readFile,writeFile} = require('fs');

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

const putData = (path,data)=>{
    return new Promise((resolve,reject)=>{
        writeFile(path,data,(err,res)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(res);
            }
        })
    })
}

const read = async (path)=>{
    try{
        const data = await getData(path);
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}

const write = async (path,data)=>{
    try{
        await putData(path,data);
    }
    catch(error){
        console.log(error);
    }  
}

read('./contents/first.txt');
read('./contents/second.txt');

write('./contents/fifth.txt','Abdullah');