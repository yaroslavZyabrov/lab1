const Mtrx = require('mtrx'); 
const isMtrxLike = require('../src/isMtrxLike'); 
const assert = require('assert');

describe('isMtrxLike', function() {
  it('should return true for a matrix-like object', function() {
    let matrix = new Mtrx([[1, 2], [3, 4]]);
    let result = isMtrxLike(matrix);
    assert.strictEqual(result, true); 
  });

  it('should return false for a non-matrix-like object (empty)', function() {
    let emptyMatrix = new Mtrx([]);
    let result = isMtrxLike(emptyMatrix);
    assert.strictEqual(result, false); 
  });

  it('should return false for a non-matrix-like object (different row lengths)', function() {
    let nonMtrxLike = new Mtrx([[1, 2], [3, 4, 5]]);
    let result = isMtrxLike(nonMtrxLike);
    assert.strictEqual(result, false); 
  });

  it('should return false for a non-matrix-like object (not an array)', function() {
    let notAnArray = { rows: 2, columns: 2, data: [[1, 2], [3, 4]] };
    let result = isMtrxLike(notAnArray);
    assert.strictEqual(result, false); 
  });
});
