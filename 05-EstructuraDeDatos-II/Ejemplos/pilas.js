'use strict'
/* PILAS CON FUNCTION CONSTRUCTOR */

function Pila() {
  this.head = null;
  this.len = 0;
}

function Nodo(data) {
  this.data = data;
  this.next = null;
}

Pila.prototype.push = function(data) {
  var newNodo = new Nodo(data);
  newNodo.next = this.head;
  this.head = newNodo;
  this.len++;
}

Pila.prototype.pop = function() {
  if (this.head == null) return null;
  var popNodo = this.head;
  this.head = popNodo.next;
  this.len--;
  return popNodo;
}

Pila.prototype.print = function() {
  if (this.head == null) return null;
  var pointer = this.head;
  while (pointer != null) {
    console.log(pointer.data);
    pointer = pointer.next;
  }
}

// INVERTIR ARRAYS CON PILAS //

function switchArray(arr) {
  var pila = new Pila();
  while (arr.length > 0) {
    pila.push(arr.shift());
  }
  return function vaciar(pila,array) {
    if (pila.head == null) return array;
    array.push(pila.pop().data);
    return vaciar(pila,array);
  }(pila,arr);
}
