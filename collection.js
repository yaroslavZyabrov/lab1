const Mtrx = require('mtrx'); 
const { reduce, every, some, map } = require('../src/matrixOperations'); 
const assert = require('assert');

describe('Matrix Operations', function() {
  it('reduce should calculate the reduction of a matrix', function() {
    let matrix = new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    let result = reduce(matrix, (acc, val) => acc + val, 0);
    assert.strictEqual(result, 45); 
  });

  it('every should check if every element in the matrix satisfies a condition', function() {
    let matrix = new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    let allGreaterThanZero = every(matrix, (val) => val > 0);
    assert.strictEqual(allGreaterThanZero, true); 

    let allEven = every(matrix, (val) => val % 2 === 0);
    assert.strictEqual(allEven, false); 
  });

  it('some should check if at least one element in the matrix satisfies a condition', function() {
    let matrix = new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    let atLeastOneNegative = some(matrix, (val) => val < 0);
    assert.strictEqual(atLeastOneNegative, false); 

    let atLeastOneEven = some(matrix, (val) => val % 2 === 0);
    assert.strictEqual(atLeastOneEven, true); 
  });

  it('map should transform every element in the matrix using a function', function() {
    let matrix = new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    let result = map(matrix, (val) => val * 2);
    assert.deepStrictEqual(result, new Mtrx([[2, 4, 6], [8, 10, 12], [14, 16, 18]])); 
  });
});
