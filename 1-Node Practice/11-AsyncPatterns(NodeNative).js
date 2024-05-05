const {readFile,writeFile} = require('fs').promises;

/* Alternative Syntax
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);
*/

const read = async ()=>{
    try{
        const data = await readFile('./contents/fifth.txt','utf8');
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}

const write = async (data)=>{
    try{
        await writeFile('./contents/fifth.txt',data,{flag:'a'});
    }
    catch(error){
        console.log(error);
    }
}

read();
write('Abdullah');
read();