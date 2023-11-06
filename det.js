const Mtrx = require('mtrx'); 
const det = require('../src/det'); 
const assert = require('assert');

describe('det', function() {
  it('should calculate the determinant of a square matrix', function() {
    let matrix = new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    let result = det(matrix);
    assert.strictEqual(result, 0); 
  });

  it('should return NaN for a non-square matrix', function() {
    let matrix = new Mtrx([[1, 2], [3, 4], [5, 6]]);
    let result = det(matrix);
    assert(isNaN(result)); 
  });

  it('should return 0 for a singular matrix', function() {
    let matrix = new Mtrx([[1, 2], [2, 4]]);
    let result = det(matrix);
    assert.strictEqual(result, 0); 
  });

  it('should calculate the determinant of a diagonal matrix', function() {
    let matrix = new Mtrx([[3, 0, 0], [0, 5, 0], [0, 0, 7]]);
    let result = det(matrix);
    assert.strictEqual(result, 105); 
  });
});
