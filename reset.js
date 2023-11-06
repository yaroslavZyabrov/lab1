const reset = require('../src/reset'); 
const assert = require('assert');

describe('reset', function() {
  it('should reset a matrix with data from a matrix-like object', function() {
    let matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];

    let matrixLike = [
      [9, 8, 7],
      [6, 5, 4],
      [3, 2, 1]
    ];

    reset(matrix, matrixLike);

    assert.deepStrictEqual(matrix, matrixLike);
  });

  it('should reset a matrix with data from another matrix-like object', function() {
    let matrix = [
      [1, 2],
      [3, 4]
    ];

    let anotherMatrixLike = [
      [5, 6],
      [7, 8]
    ];

    reset(matrix, anotherMatrixLike);

    assert.deepStrictEqual(matrix, anotherMatrixLike);
  });

});
