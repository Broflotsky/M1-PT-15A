/* eslint-disable no-undef */
'use strict'

const {
  quickSort,
  mergeSort,
} = require('../homework');

describe('quickSort(array)', function() {
  it('Debe retornar el array ordenado de menor a mayor', function() {
    expect(quickSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
    expect(quickSort([10, 10, 16, 12])).toEqual([10, 10, 12, 16]);
    expect(quickSort([10, -2, -7, 4])).toEqual([-7, -2, 4, 10]);
  });
});

describe('mergeSort(array)', function() {
  it('Debe retornar el array ordenado de menor a mayor', function() {
    expect(mergeSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
    expect(mergeSort([10, 10, 16, 12])).toEqual([10, 10, 12, 16]);
    expect(mergeSort([10, -2, -7, 4])).toEqual([-7, -2, 4, 10]);
  });
});
