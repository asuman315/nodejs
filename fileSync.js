//fs helps to access content in a file. Read files and create new files
const { readFileSync, writeFileSync } = require('fs'); //same as const fs = require('fs')
console.log('Start');
// const { readFile } = require('fs/promises');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
//console.log(first, second);

//writeFileSync enables node to create a file and insert content if the file is not there or overwrite the content if the file is already there
writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`)

console.log('done with this taks');
console.log('starting the next one');