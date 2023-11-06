const Mtrx = require('mtrx'); 
const { compan } = require('../src/compan'); 
const assert = require('assert');

describe('compan', function() {
  it('should return the companion matrix of a non-singular square matrix', function() {
    let matrix = new Mtrx([[1, 2], [3, 4]]);
    let result = compan(matrix);
    assert.deepStrictEqual(result, new Mtrx([[-4, 3], [2, -1]]));
  });

  it('should return the original matrix if it is singular and of size 1', function() {
    let matrix = new Mtrx([[0]]);
    let result = compan(matrix);
    assert.deepStrictEqual(result, new Mtrx([[0]]));
  });

  it('should throw an error for a non-square matrix', function() {
    let matrix = new Mtrx([[1, 2, 3], [4, 5, 6]]);
    assert.throws(() => compan(matrix), /is not a Square matrix/);
  });

  it('should return the original matrix if it is singular and of size 2', function() {
    let matrix = new Mtrx([[0, 0], [0, 0]]);
    let result = compan(matrix);
    assert.deepStrictEqual(result, new Mtrx([[0, 0], [0, 0]]));
  });
});
