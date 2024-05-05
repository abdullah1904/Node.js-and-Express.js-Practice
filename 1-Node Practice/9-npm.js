// npm - global module comes with node
// npm --version

// local dependency - use it only in this particular project
// npm install <packageName>

// Global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// Dev dependency - use it only for development
// npm install <packageName> -D

// Uninstall Package Command
// npm uninstall <packageName>

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const {flattenDeep} = require('lodash');

const items = [1,[2,[3,[4]]]];
console.log(flattenDeep(items));