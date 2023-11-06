const reduce = require('../src/reduce'); 
const assert = require('assert');

describe('reduce', function() {
  it('should reduce elements of a matrix to a sum', function() {
    let matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];

    let result = reduce(matrix, (acc, value) => acc + value, 0);
    assert.strictEqual(result, 45); 
  });

  it('should reduce elements of a matrix to a product', function() {
    let matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];

    let result = reduce(matrix, (acc, value) => acc * value, 1);
    assert.strictEqual(result, 362880); 
  });

  it('should reduce elements of a matrix with an initial value', function() {
    let matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];

    let result = reduce(matrix, (acc, value) => acc + value, 100);
    assert.strictEqual(result, 145); 
  });

});
