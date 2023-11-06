const rank = require('../src/rank'); 
const assert = require('assert');

describe('rank', function() {
  it('should calculate the rank of a matrix with full rank', function() {
    let matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    let result = rank(matrix);
    assert.strictEqual(result, 2); 
  });

  it('should calculate the rank of a matrix with reduced rank', function() {
    let matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [0, 0, 0]
    ];
    let result = rank(matrix);
    assert.strictEqual(result, 1); 
  });

  it('should calculate the rank of an empty matrix', function() {
    let matrix = [];
    let result = rank(matrix);
    assert.strictEqual(result, 0); 
  });

  it('should calculate the rank of a square matrix', function() {
    let matrix = [
      [1, 2],
      [3, 4]
    ];
    let result = rank(matrix);
    assert.strictEqual(result, 2); 
  });

});
