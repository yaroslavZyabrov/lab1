const Mtrx = require('../src/Mtrx'); 
const assert = require('assert');

describe('Mtrx', function() {
  it('should create a matrix of zeros with the specified dimensions', function() {
    let matrix = new Mtrx.zeros(3, 3);
    let expected = new Mtrx([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
    assert.deepStrictEqual(matrix, expected);
  });

  it('should add two matrices of the same shape', function() {
    let matrix1 = new Mtrx([[1, 2], [3, 4]]);
    let matrix2 = new Mtrx([[5, 6], [7, 8]);
    let result = matrix1.add(matrix2);
    let expected = new Mtrx([[6, 8], [10, 12]);
    assert.deepStrictEqual(result, expected);
  });

  it('should throw an error when adding matrices of different shapes', function() {
    let matrix1 = new Mtrx([[1, 2], [3, 4]]);
    let matrix2 = new Mtrx([[5, 6, 7], [8, 9, 10]);
    assert.throws(() => matrix1.add(matrix2), /shape is not like/);
  });

  it('should calculate the determinant of a square matrix', function() {
    let matrix = new Mtrx([[2, -1, 0], [-1, 2, -1], [0, -1, 2]]);
    let det = matrix.det;
    let expected = 4;
    assert.strictEqual(det, expected);
  });

  it('should throw an error when calculating the determinant of a non-square matrix', function() {
    let nonSquareMatrix = new Mtrx([[1, 2, 3], [4, 5, 6]]);
    assert.throws(() => nonSquareMatrix.det, /is not a Square matrix/);
  });

});
