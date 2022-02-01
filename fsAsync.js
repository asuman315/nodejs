//fs helps to access content in a file. Read files and create new files with asynchronous. Asynchronous means that one goes first and not at the same time. Also task two can be finished before completing task one say if task one takes longer to finish. In synchronous programming, the next task is only handled after finishing the previous one.
const { readFile, writeFile } = require('fs')

// readFile('./content/first.txt', 'utf8', (err, result) => {
//  if (err) {
//   console.log(err);
//   return
//  }
//  console.log(result);
// })
console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => {
 if (err) {
  console.log(err);
  return
 }
 const first = result;
 readFile('./content/second.txt', 'utf8', (err, result) => {
  if (err) {
   console.log(err);
   return
  }
  const second = result;
  writeFile(
   './content/result-async.txt',
   `Here is the result : ${first}, ${second}`, (err, result) => {
    if (err) {
     console.log(err);
     return
    }
    // console.log(result);
    /*Demonstrating async programming*/console.log('Done with this task');
   }
  )
 })
})
console.log('starting the next task');
