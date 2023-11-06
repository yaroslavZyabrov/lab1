const Mtrx = require('mtrx');
const create = require('../src/create'); 
const assert = require('assert');

describe('create', function() {
  it('should create a matrix with the specified number of rows and columns using a custom function', function() {
    const matrix = create((i, j) => i * 10 + j)(3, 4);
    const expectedMatrix = new Mtrx([[0, 1, 2, 3], [10, 11, 12, 13], [20, 21, 22, 23]]);
    assert.deepStrictEqual(matrix, expectedMatrix);
  });

  it('should create a matrix with the same number of rows and columns if only one dimension is specified', function() {
    const matrix = create((i, j) => i * 10 + j)(2);
    const expectedMatrix = new Mtrx([[0, 1], [10, 11]]);
    assert.deepStrictEqual(matrix, expectedMatrix);
  });
});
