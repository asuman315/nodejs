const path = require('path')
console.log(path.sep);

//.join() joins a sequence of paths using the platform's specific seperators and returns a normalised path

const filepath = path.join('/content', '/subfolder', 'test.txt');
console.log(filepath);

//would only want the last path
const base = path.basename(filepath)
console.log(base);

//path.resolve() returns an absolute path
const absolute = path.resolve('app.js', 'content', 'subfolder', 'test.txt')

console.log(absolute);