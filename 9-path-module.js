const path = require('path');

// --- platform path separator
// console.log(path.sep);

// ---path to a certain file
const filePath = path.join('/content/', 'subfolder', 'test.txt');
console.log(filePath);

// ---base name of a file
console.log(path.basename(filePath));

// ---absolute path to a file
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
