const fs = require('fs');

const readFruitFile = (fileName) => new Promise((fulfill, reject) => {
  fs.readFile(fileName, (error, fruits) => {
    if (error) {
      return reject(new Error('File cannot be opened'));
    }
    console.log(fruits.toString().split('\r\n'));
    return fulfill(fruits.toString().split('\r\n'));
  });
});
module.export = readFruitFile;
