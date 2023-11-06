const Mtrx = require('mtrx'); 
const inverse = require('../src/inverse'); 
const assert = require('assert');

describe('inverse', function() {
  it('should calculate the inverse of a square non-singular matrix', function() {
    let matrix = new Mtrx([[2, 1], [1, 2]]);
    let result = inverse(matrix);
    let expectedMatrix = new Mtrx([[0.6666666666666666, -0.3333333333333333], [-0.3333333333333333, 0.6666666666666666]]);
    assert.deepStrictEqual(result, expectedMatrix);
  });

  it('should throw an error for a non-square matrix', function() {
    let matrix = new Mtrx([[1, 2], [3, 4], [5, 6]]);
    assert.throws(() => inverse(matrix), /is not a Square matrix/);
  });

  it('should throw an error for a singular matrix', function() {
    let matrix = new Mtrx([[1, 2], [2, 4]]);
    assert.throws(() => inverse(matrix), /Matrix is singular and has no inverse/);
  });
});
