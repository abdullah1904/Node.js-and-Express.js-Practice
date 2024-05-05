console.log(__dirname); // Path to current directory
console.log(__filename); // File name
console.log(require);
console.log(module); // Info about current module
console.log(process); // Info about the env where the program is being executed

setTimeout(()=>{
    console.log("Hello");
},1000);

setInterval(()=>{
    console.log("World");
},5000);
