const fs = require('fs');

const readFruitFile = (filename) => {
  let fruitsArray;
  fs.readFile(filename, (err, data) => {
    if (err) throw err;
    const fruits = data.toString().split('\n');
    fruitsArray = fruits;
    console.log(fruits);
    /*
    fruits.forEach((fruit) => {
      console.log(fruit);
    }); */
  });
  return new Promise((resolve) => {
    resolve(fruitsArray);
  });
};
const promise = new Promise((fulfill) => {
  setTimeout(() => {
    fulfill('FULFILLED!');
  }, 300);
});
promise.then(() => {
  readFruitFile('fruits.txt');
});

module.export = { promise, readFruitFile };
