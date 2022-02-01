const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);

/****
Push () to github without the modules
Create a new repository in github and get the url
Inside the repo
Create a gitignore to be ignored by the source control: gitignore is a file that specifies which files are going to be ignores by the source control.

How To Add A File To Git?
- git add 
****/ 