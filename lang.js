const lang = require('../src/lang'); 
const assert = require('assert');

describe('isNumber', function() {
  it('should return true for a number', function() {
    let result = lang.isNumber(42);
    assert.strictEqual(result, true); 
  });

  it('should return false for a non-number', function() {
    let result = lang.isNumber('42');
    assert.strictEqual(result, false); 
  });
});

describe('isNumberArray', function() {
  it('should return true for an array of numbers', function() {
    let result = lang.isNumberArray([1, 2, 3]);
    assert.strictEqual(result, true); 
  });

  it('should return false for an array with non-number elements', function() {
    let result = lang.isNumberArray([1, '2', 3]);
    assert.strictEqual(result, false); 
  });

  it('should return false for a non-array', function() {
    let result = lang.isNumberArray(42);
    assert.strictEqual(result, false); 
  });

  it('should return false for an empty array', function() {
    let result = lang.isNumberArray([]);
    assert.strictEqual(result, false); 
  });
});

describe('toArray', function() {
  it('should convert a value to an array', function() {
    let result = lang.toArray(42);
    assert.deepStrictEqual(result, [42]); 
  });
});
