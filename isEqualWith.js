const Mtrx = require('mtrx'); 
const isEqualWith = require('../src/isEqualWith'); 
const assert = require('assert');

describe('isEqualWith', function() {
  it('should compare two matrices using a custom comparator and return true for equal matrices', function() {
    let matrix1 = new Mtrx([[1, 2], [3, 4]]);
    let matrix2 = new Mtrx([[1, 2], [3, 4]]);
    let result = isEqualWith(matrix1, matrix2, (m1, comparator) => {
      return comparator(m1, (n, i, j) => n === matrix2[i][j]);
    });
    assert.strictEqual(result, true); 
  });

  it('should compare two matrices using a custom comparator and return false for non-equal matrices', function() {
    let matrix1 = new Mtrx([[1, 2], [3, 4]]);
    let matrix2 = new Mtrx([[1, 2], [4, 3]]);
    let result = isEqualWith(matrix1, matrix2, (m1, comparator) => {
      return comparator(m1, (n, i, j) => n === matrix2[i][j]);
    });
    assert.strictEqual(result, false); 
  });

  it('should throw an error for matrices with different shapes', function() {
    let matrix1 = new Mtrx([[1, 2], [3, 4]]);
    let matrix2 = new Mtrx([[1, 2], [3, 4], [5, 6]]);
    assert.throws(() => isEqualWith(matrix1, matrix2, (m1, comparator) => {
      return comparator(m1, (n, i, j) => n === matrix2[i][j]);
    }), /shape is no like/);
  });
});
