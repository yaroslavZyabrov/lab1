const multiply = require('../src/multiply'); 
const assert = require('assert');

describe('multiply', function() {
  it('should multiply two matrices of compatible dimensions', function() {
    let matrix1 = [[1, 2], [3, 4]];
    let matrix2 = [[5, 6], [7, 8]];
    let result = multiply(matrix1, matrix2);
    let expected = [[19, 22], [43, 50]];
    assert.deepStrictEqual(result, expected);
  });

  it('should throw an error when multiplying matrices of incompatible dimensions', function() {
    let matrix1 = [[1, 2], [3, 4]];
    let matrix2 = [[5, 6, 7], [8, 9, 10]];
    assert.throws(() => multiply(matrix1, matrix2), /can't right multiply/);
  });

});
