/* eslint-disable no-unused-vars */
const { readFruitFile, promise } = require('../readFruits');

// test('readFruitFile Function', () => readFruitFile('fruits.txt').then((data) => {
// expect(data).resolves.toStrictEqual(['Apple', 'Orange', 'Banana', 'Strawberry']);
// }));

describe('readFruits function', () => {
  // eslint-disable-next-line no-unused-vars
  it.only('readFruitFile Function', (done) => {
    const spy = jest.spyOn(console, 'log');
    readFruitFile('fruits.txt');
    setTimeout(() => {
      expect(spy).toHaveBeenCalledWith(['Apple', 'Orange', 'Banana', 'Strawberry']);
      done();
    }, 2000);
  });
});
/*

test('readFruitFile Function', (done) => {
  promise.then((resolve) => {
    readFruitFile('fruits.txt');
    expect(resolve).resolves.toStrictEqual(['Apple', 'Orange', 'Banana', 'Strawberry']);
  });
});
*/
