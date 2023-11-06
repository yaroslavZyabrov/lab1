const Mtrx = require('mtrx');
const isSquare = require('../src/isSquare'); 
const assert = require('assert');

describe('isSquare', function() {
  it('should return true for a square matrix', function() {
    let squareMatrix = new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    let result = isSquare(squareMatrix);
    assert.strictEqual(result, true); 
  });

  it('should return false for a non-square matrix', function() {
    let nonSquareMatrix = new Mtrx([[1, 2], [3, 4], [5, 6]]);
    let result = isSquare(nonSquareMatrix);
    assert.strictEqual(result, false); 
  });

  it('should return true for an empty matrix', function() {
    let emptyMatrix = new Mtrx([]);
    let result = isSquare(emptyMatrix);
    assert.strictEqual(result, true); 
  });
});
