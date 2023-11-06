const Mtrx = require('mtrx'); // Подключаем библиотеку Mtrx
const cof = require('../src/cof');
const assert = require('assert');

describe('cof', function() {
  it('should calculate the cofactor of a matrix', function() {
    let matrix = new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    let cofactor = cof(matrix, 1, 1);
    assert.deepStrictEqual(cofactor, new Mtrx([[1, 3], [7, 9]]));
  });

  it('should handle edge cases, such as empty matrix', function() {
    let matrix = new Mtrx([]);
    let cofactor = cof(matrix, 0, 0);
    assert.deepStrictEqual(cofactor, new Mtrx([]));
  });
});
