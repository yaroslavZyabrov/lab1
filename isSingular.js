const Mtrx = require('mtrx'); 
const isSingular = require('../src/isSingular'); 
const assert = require('assert');

describe('isSingular', function() {
  it('should return true for a singular matrix with a zero row', function() {
    let matrix = new Mtrx([[1, 2], [0, 0]]);
    let result = isSingular(matrix);
    assert.strictEqual(result, true); 
  });

  it('should return true for a singular matrix with a zero column', function() {
    let matrix = new Mtrx([[1, 0], [2, 0]]);
    let result = isSingular(matrix);
    assert.strictEqual(result, true); 
  });

  it('should return true for a singular matrix with rank less than size', function() {
    let matrix = new Mtrx([[1, 2, 3], [4, 5, 6], [2, 4, 6]]);
    let result = isSingular(matrix);
    assert.strictEqual(result, true); 
  });

  it('should return false for a non-singular matrix', function() {
    let matrix = new Mtrx([[1, 2], [3, 4]]);
    let result = isSingular(matrix);
    assert.strictEqual(result, false); 
  });
});
