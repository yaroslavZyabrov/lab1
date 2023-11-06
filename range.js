const range = require('../src/range'); 
const assert = require('assert');

describe('range', function() {
  it('should generate a range of numbers from 0 to 5', function() {
    let result = range(6);
    let expected = [0, 1, 2, 3, 4, 5];
    assert.deepStrictEqual(result, expected);
  });

  it('should generate a range of numbers from 1 to 10 with a step of 2', function() {
    let result = range(1, 11, 2);
    let expected = [1, 3, 5, 7, 9];
    assert.deepStrictEqual(result, expected);
  });

  it('should generate an empty range for negative start and stop values', function() {
    let result = range(-5, -10);
    let expected = [];
    assert.deepStrictEqual(result, expected);
  });

  it('should generate a range with a negative step', function() {
    let result = range(10, 0, -2);
    let expected = [10, 8, 6, 4, 2, 0];
    assert.deepStrictEqual(result, expected);
  });

  it('should generate an empty range when start is greater than stop with a positive step', function() {
    let result = range(10, 5);
    let expected = [];
    assert.deepStrictEqual(result, expected);
  });

  it('should generate an empty range when start is less than stop with a negative step', function() {
    let result = range(5, 10, -1);
    let expected = [];
    assert.deepStrictEqual(result, expected);
  });

});
