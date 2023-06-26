/* eslint-disable no-undef */
'use strict'

const {
  BinarySearchTree
} = require('../homework');

describe('binarySearchTree', function() {
  var tree,
      testArr,
      valuesToInsert = [15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34];

  beforeEach(function() {
    tree = new BinarySearchTree(20);
    testArr = [];
  });

  it('tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, y `size`', function() {
    expect(typeof tree.insert).toBe('function');
    expect(typeof tree.contains).toBe('function');
    expect(typeof tree.depthFirstForEach).toBe('function');
    expect(typeof tree.breadthFirstForEach).toBe('function');
    expect(typeof tree.size).toBe('function');
  });

  it('toma valores y reporta tamaño correctamente', function () {
    tree.insert(12);
    expect(tree.size()).toBe(2);
  });

  it('hace nodos en la rama correcta', function () {
    tree.insert(12);
    tree.insert(22);
expect(tree.size()).toBe(3);
    expect(tree.left.value).toBe(12);
    expect(tree.right.value).toBe(22);
  });

  it('ordena valores cuando agrega', function() {
    expect(tree.value).toBe(20);
    tree.insert(15);
    expect(tree.left.value).toBe(15);
    tree.insert(25);
    expect(tree.right.value).toBe(25);
    tree.insert(5);
    expect(tree.left.left.value).toBe(5);
    tree.insert(17);
    tree.insert(21);
    tree.insert(28);
    tree.insert(0);
    tree.insert(14);
    tree.insert(50);
    tree.insert(1);
    tree.insert(45);
    tree.insert(13);
    tree.insert(12);
    tree.insert(11);
    expect(tree.left.left.right.left.left.left.value).toBe(11);
    tree.insert(30);
    tree.insert(35);
    tree.insert(33);
    tree.insert(31);
    tree.insert(34);
    expect(tree.right.right.right.left.left.right.left.right.value).toBe(34);
  });

  it('`contains` devuelve true si el valor esta en el tree', function() {
    valuesToInsert.forEach(function(value){
        tree.insert(value);
    });
    valuesToInsert.forEach(function(value){
        expect(tree.contains(value)).toBe(true);
    });
  });

  it('`contains` devuelve false si el valor no esta en el tree', function() {
    valuesToInsert.forEach(function(value){
        tree.insert(value);
    });
    [6, 23, 37, 51].forEach(function(value){
        expect(tree.contains(value)).toBe(false);
    });
  });

  // ventaja obvia: valores son procesados respetando su orden lógico
  it('corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order"', function() {
    valuesToInsert.forEach(function(value){
        tree.insert(value);
    });
    tree.depthFirstForEach(function(val){ testArr.push(val); });
    expect(testArr).toEqual([ 0, 1, 5, 11, 12, 13, 14, 15, 17, 20, 21, 25, 28, 30, 31, 33, 34, 35, 45, 50 ]);
    testArr = [];
    tree.depthFirstForEach(function(val){ testArr.push(val); }, 'in-order');
    expect(testArr).toEqual([ 0, 1, 5, 11, 12, 13, 14, 15, 17, 20, 21, 25, 28, 30, 31, 33, 34, 35, 45, 50 ]);
  });

  // caso de uso: copiar el arbol (procesa primero la raiz)
  it('corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"', function() {
    valuesToInsert.forEach(function(value){
        tree.insert(value);
    });
    tree.depthFirstForEach(function(val){ testArr.push(val); }, 'pre-order');
    expect(testArr).toEqual([20, 15, 5, 0, 1, 14, 13, 12, 11, 17, 25, 21, 28, 50, 45, 30, 35, 33, 31, 34]);
  });

  // caso de uso: borrar un arbol, procesa primero las hojas
  it('corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"', function() {
    valuesToInsert.forEach(function(value){
        tree.insert(value);
    });
    tree.depthFirstForEach(function(val){ testArr.push(val); }, 'post-order');
    expect(testArr).toEqual([ 1, 0, 11, 12, 13, 14, 5, 17, 15, 21, 31, 34, 33, 35, 30, 45, 50, 28, 25, 20 ]);
  });

  // util cuando los niveles del arbol tienen significado (org chart? DOM elements?)
  it('corre breadth-first cuando breadthFirstForEach() es ejecutado', function() {
    valuesToInsert.forEach(function(value){
        tree.insert(value);
    });
    var depth = [];
    tree.breadthFirstForEach(function(val){ depth.push(val); });
    expect(depth).toEqual([20, 15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 13, 45, 12, 30, 11, 35, 33, 31, 34]);
  });
});