/* eslint-disable no-undef */
'use strict'
const {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
} = require('../homework');

describe('factorear(num)', function() {
  it('Debería devolver ...?', function() {
    expect(factorear(180)).toEqual([1,2,2,3,3,5]);
    expect(factorear(32)).toEqual([1,2,2,2,2,2]);
    expect(factorear(33)).toEqual([1,3,11]);
    expect(factorear(1)).toEqual([1]);
  });
});

describe('bubbleSort(array)', function() {
  it('Debe retornar el array ordenado de menor a mayor', function() {
    expect(bubbleSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
    expect(bubbleSort([10, 10, 16, 12])).toEqual([10, 10, 12, 16]);
    expect(bubbleSort([10, -2, -7, 4])).toEqual([-7, -2, 4, 10]);
  });
});

describe('insertionSort(array)', function() {
  it('Debe retornar el array ordenado de menor a mayor', function() {
    expect(insertionSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
    expect(insertionSort([10, 10, 16, 12])).toEqual([10, 10, 12, 16]);
    expect(insertionSort([10, -2, -7, 4])).toEqual([-7, -2, 4, 10]);
  });
});


describe('selectionSort(array)', function() {
  it('Debe retornar el array ordenado de menor a mayor', function() {
    expect(selectionSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
    expect(selectionSort([10, 10, 16, 12])).toEqual([10, 10, 12, 16]);
    expect(selectionSort([10, -2, -7, 4])).toEqual([-7, -2, 4, 10]);
  });
});
