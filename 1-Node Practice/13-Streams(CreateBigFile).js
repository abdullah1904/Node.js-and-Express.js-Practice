const {writeFileSync} = require('fs');
for(let i=1;i<=1000;i++){
    writeFileSync('./contents/bigDataFile.txt',`${i}) Hello World\n`,{flag:'a'});
}