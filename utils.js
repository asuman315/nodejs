//CommonJs, every file is module by default
//Modules in Node
const sayHi = require('./utils')
const { mercy, olivia }/*names*/ = require('./4-names')
// console.log(names);
sayHi('Susan')
sayHi(olivia)
sayHi(mercy)

const sayHi = name => console.log(name);
module.exports = sayHi