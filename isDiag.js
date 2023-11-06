const Mtrx = require('mtrx'); 
const isDiag = require('../src/isDiag'); 
const assert = require('assert');

describe('isDiag', function() {
  it('should return true for a diagonal matrix', function() {
    let matrix = new Mtrx([[1, 0, 0], [0, 2, 0], [0, 0, 3]]);
    let result = isDiag(matrix);
    assert.strictEqual(result, true); 
  });

  it('should return false for a non-diagonal square matrix', function() {
    let matrix = new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    let result = isDiag(matrix);
    assert.strictEqual(result, false); 
  });

  it('should return false for a non-square matrix', function() {
    let matrix = new Mtrx([[1, 2], [3, 4], [5, 6]]);
    let result = isDiag(matrix);
    assert.strictEqual(result, false); 
  });

  it('should return true for an empty matrix', function() {
    let matrix = new Mtrx([]);
    let result = isDiag(matrix);
    assert.strictEqual(result, true); 
  });
});
