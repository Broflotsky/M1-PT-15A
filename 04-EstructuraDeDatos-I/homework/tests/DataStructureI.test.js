 /* eslint-disable no-undef */
'use strict'

const {
  Queue,
  nFactorial,
  nFibonacci
} = require('../homework');

describe('nFactorial(n)', function() {
  it('debe devolver el factorial de n', function() {
    expect(nFactorial(5)).toBe(120);
    expect(nFactorial(15)).toBe(1307674368000);
  });
});

describe('nFibonacci(n)', function() {
  // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  it('debe bevolver el enesimo número de la serie de fibonacci', () => {
    const fib1 = nFibonacci(0);
    const fib2 = nFibonacci(6);
    const fib3 = nFibonacci(9);
    const fib4 = nFibonacci(2);
    expect(fib1).toBe(0);
    expect(fib2).toBe(8);
    expect(fib3).toBe(34);
    expect(fib4).toBe(1);
  });
});


describe('Un queue', function() {
  var queue;

  beforeEach(function() {
    queue = new Queue();
  });

  it('tiene los metodos `enqueue`, `dequeue`, y `size`', function() {
    expect(typeof queue.enqueue).toBe('function');
    expect(typeof queue.dequeue).toBe('function');
    expect(typeof queue.size).toBe('function');
  });

  it('tiene size 0 inicialmente', function() {
    expect(queue.size()).toBe(0);
  });

  it('incrementa en size cuando agregamos items', function() {
    queue.enqueue('first in line');
    expect(queue.size()).toBe(1);
  });

  it('decrementa en size cuando removemos elementos', function() {
    queue.enqueue('first');
    queue.enqueue('second');
    queue.enqueue('third');
    queue.dequeue();
    expect(queue.size()).toBe(2);
  });

  it('devuelve el item correcto cuando dequeeamos', function() {
    queue.enqueue('first');
    queue.enqueue('second');
    queue.enqueue('third');
    expect(queue.size()).toBe(3);
    expect(queue.dequeue()).toBe('first');
    expect(queue.size()).toBe(2);
    expect(queue.dequeue()).toBe('second');
    expect(queue.size()).toBe(1);
    expect(queue.dequeue()).toBe('third');
    expect(queue.size()).toBe(0);
  });

  it('maneja bien el underflow, cuando no hay elementos dequeue devuelve undefined', function() {
    queue.enqueue('first in line');
    expect(queue.size()).toBe(1);
    expect(queue.dequeue()).toBe('first in line');
    expect(queue.size()).toBe(0);
    expect(queue.dequeue()).toBe(undefined);
    expect(queue.size()).toBe(0);
    expect(queue.dequeue()).toBe(undefined);
    expect(queue.size()).toBe(0);
  });

  it('maneja bien varios enqueue y dequeue', function(){
    queue.enqueue(1);
    expect(queue.dequeue()).toBe(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(2);
    queue.enqueue(4);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(4);
    expect(queue.dequeue()).toBe(undefined);
  });

  it('agrega y remueve sus propios items', function(){
    var q2 = new Queue();
    queue.enqueue('fullstack');
    q2.enqueue('JavaScript');
    expect(q2.dequeue()).toBe('JavaScript');
    expect(q2.dequeue()).toBe(undefined);
    expect(queue.dequeue()).toBe('fullstack');
    expect(queue.dequeue()).toBe(undefined);
  });

});
