const names = require('./3-ModuleVariableFile');
const greetings = require('./3-ModuleFunctionFile');
const data = require("./3-ModuleComplexDataFile");

greetings(names.john);
greetings(names.peter);
greetings("Susan");

console.log(data.items);
console.log(data.singlePerson);
