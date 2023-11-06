const Mtrx = require('mtrx'); 
const isSameShape = require('../src/isSameShape'); 
const assert = require('assert');

describe('isSameShape', function() {
  it('should return true for two matrices with the same shape', function() {
    let matrix1 = new Mtrx([[1, 2], [3, 4]]);
    let matrix2 = new Mtrx([[5, 6], [7, 8]]);
    let result = isSameShape(matrix1, matrix2);
    assert.strictEqual(result, true); 
  });

  it('should return false for two matrices with different shapes', function() {
    let matrix1 = new Mtrx([[1, 2], [3, 4]]);
    let matrix2 = new Mtrx([[1, 2, 3], [4, 5, 6]]);
    let result = isSameShape(matrix1, matrix2);
    assert.strictEqual(result, false); 
  });

  it('should return false for a matrix and a non-matrix object', function() {
    let matrix = new Mtrx([[1, 2], [3, 4]]);
    let nonMatrix = { rows: 2, columns: 2, data: [[1, 2], [3, 4]] };
    let result = isSameShape(matrix, nonMatrix);
    assert.strictEqual(result, false); 
  });
});
