const Mtrx = require('mtrx'); 
const LUP = require('../src/LUP'); 
const assert = require('assert');

describe('LUP', function() {
  it('should return L, U, and P matrices for a square matrix', function() {
    let matrix = new Mtrx([[2, -1, 0], [-1, 2, -1], [0, -1, 2]]);
    let result = LUP(matrix);
    
    let expectedL = new Mtrx([[1, 0, 0], [-0.5, 1, 0], [0, -0.6667, 1]]);
    let expectedU = new Mtrx([[2, -1, 0], [0, 1.5, -1], [0, 0, 1.3333]]);
    let expectedP = new Mtrx([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);

    assert.deepStrictEqual(result.L, expectedL);
    assert.deepStrictEqual(result.U, expectedU);
    assert.deepStrictEqual(result.P, expectedP);
  });

  it('should throw an error for a non-square matrix', function() {
    let nonSquareMatrix = new Mtrx([[1, 2, 3], [4, 5, 6]]);
    assert.throws(() => LUP(nonSquareMatrix), /is not a Square matrix/);
  });
});
