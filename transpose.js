const transpose = require('../src/transpose'); 
const assert = require('assert');

describe('transpose', function() {
  it('should transpose a matrix with rows and columns swapped', function() {
    let matrix = [
      [1, 2, 3],
      [4, 5, 6]
    ];

    let transposedMatrix = transpose(matrix);

    assert.deepStrictEqual(transposedMatrix, [
      [1, 4],
      [2, 5],
      [3, 6]
    ]);
  });

  it('should transpose a square matrix to itself', function() {
    let squareMatrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];

    let transposedSquareMatrix = transpose(squareMatrix);

    assert.deepStrictEqual(transposedSquareMatrix, squareMatrix);
  });

  it('should transpose a matrix with one row to one column', function() {
    let singleRowMatrix = [[1, 2, 3]];

    let transposedSingleRowMatrix = transpose(singleRowMatrix);

    assert.deepStrictEqual(transposedSingleRowMatrix, [[1], [2], [3]]);
  });

});
