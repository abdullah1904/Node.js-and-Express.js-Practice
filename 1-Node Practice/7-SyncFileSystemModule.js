const fs = require('fs');

const firstFileData = fs.readFileSync('./contents/first.txt','utf8');
const secondFileData = fs.readFileSync('./contents/second.txt','utf8');

console.log(firstFileData,secondFileData);

fs.writeFileSync('./contents/third.txt','\nAbdullah is Good Developer',{flag:'a'});