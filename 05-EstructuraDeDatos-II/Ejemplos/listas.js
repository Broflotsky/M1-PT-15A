'use strict'

/* LISTAS ENLAZDAS */

function Lista(){
	this.point = null;
	this.len = 0;
}

function Nodo(data) {
	this.data = data;
	this.next = null;
}

Lista.prototype.push = function(data) { // Insert Last
	var newNodo = new Nodo(data);
	if (this.point == null) {
		this.point = newNodo;
	} else {
		pointer = this.point;
		while (pointer.next!=null) {
			pointer = pointer.next;
		}
		pointer.next = newNodo;
	}
	this.len++;
}

Lista.prototype.insertFirst = function(data) {
	var newNodo = new Nodo(data);
	if (this.point == null) {
		this.point = newNodo;
	} else {
		var pointer = this.point;
		this.point = newNodo;
		newNodo.next = pointer;
	}
	this.len++;
}

Lista.prototype.insert = function(data,pos) {
	if (this.len < pos) return this.push(data); 
	var newNodo = new Nodo(data);
	if (pos == 1) {
		newNodo.next = this.point;
		this.point = newNodo;
	}
	var pointer = this.point;
	while (pos > 1) {
		pos--;
		pointer = pointer.next;
	}
	newNodo.next = pointer.next;
	pointer.next = newNodo;
}

Lista.prototype.print = function() {
	pointer = this.point;
	while (pointer.next!=null) {
		console.log(pointer.data);
		pointer = pointer.next;
	}
	console.log(pointer.data);
}

Lista.prototype.printOne = function(pos) {
	if (pos > this.len) return console.log('Posicion fuera de rango.');
	pointer = this.point;
	var aux = pos;
	while (aux > 1) {
		aux--;
		pointer = pointer.next;
	}
	console.log('Data ['+pos+'] = '+pointer.data)
}

Lista.prototype.deleteFirst = function() {
	if (this.len == 0) return console.log('Es una lista vacia');
	this.point = this.point.next;
	this.len--;
}

Lista.prototype.deleteLast = function() {	
	pointer = this.point;
	while (pointer.next.next!=null) {
		pointer = pointer.next;
	}
	pointer.next = null;
	this.len--;
}

Lista.prototype.find = function(val) {
	if (this.len == 0) return console.log('Es una lista vacia');
	var pointer = this.point;
	var check = false;
	if (pointer.data == val) check = true;
	while (!check && pointer.next != null) {
		pointer = pointer.next;
		if (pointer.data == val) check = true;
	}
	if (check) {
		return pointer;
	} else {
		return undefined;	
	} 
}

// var list = new Lista();

// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);

// list.print()
