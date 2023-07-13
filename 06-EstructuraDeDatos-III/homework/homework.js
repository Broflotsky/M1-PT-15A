'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, 
  según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, 
  hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value
   this.left = null
   this.right = null
}

BinarySearchTree.prototype.insert = function (value) {
   // Miraremos si tenemos root o raíz
   // Si el valor es mayor o menor al root
   // value > root => derecha
   // value < root => izquierda
   // si hay dere o izq => reevaluar (Recursión)

   if (value > this.value) {
      if (this.right !== null) {
         this.right.insert(value)
      } else {
         this.right = new BinarySearchTree(value)
      }
   }

   if (value < this.value) {
      if (this.left !== null) {
         this.left.insert(value)
      } else {
         this.left = new BinarySearchTree(value)
      }
   }
}

BinarySearchTree.prototype.contains = function (value) {
   // determinemos si el valor es nuestra root
   if (this.value === value) {
      return true
   }
   if (value > this.value) {
      if (this.right === null) { // Cuando no tengo hijos por derecha
         return false;
      } else {
         return this.right.contains(value)
      }
   } else {
      if (this.left === null) { // Cuando no tengo hijos por izquierda
         return false;
      } else {
         return this.left.contains(value)
      }
   }
}

BinarySearchTree.prototype.size = function () {
   // Plantearnos caso de corte.
   if (this.right === null && this.left === null) return 1 // Esta solo
   if (this.left !== null && this.right === null) return 1 + this.left.size() // Tiene left y va a la izquierda
   if (this.right !== null && this.left === null) return 1 + this.right.size() // Tiene Right y va a la derecha
   if (this.right !== null && this.left !== null) return 1 + this.left.size() + this.right.size() // tiene los 2.
}
BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
   if (order === 'pre-order') {
      // Pre-order => root, izq y der
      cb(this.value);
      if (this.left !== null) this.left.depthFirstForEach(cb, order)
      if (this.right !== null) this.right.depthFirstForEach(cb, order)
   } else if (order === 'post-order') {
      // Post-order => izq, der y root
      if (this.left !== null) this.left.depthFirstForEach(cb, order)
      if (this.right !== null) this.right.depthFirstForEach(cb, order)
      cb(this.value);
   } else { // Este seria mi caso de 'in-order'
      // in-order => izq, root y der
      if (this.left !== null) this.left.depthFirstForEach(cb, order)
      cb(this.value);
      if (this.right !== null) this.right.depthFirstForEach(cb, order)
   }

}


BinarySearchTree.prototype.breadthFirstForEach = function (cb, pendientes = []) {
   // primero izquierdas y luego derechas NIVEL x NIVEL
   // Guardamos nuestros valores en PENDIENTES y consumo en orden FIFO
   if (this.left !== null) {
      pendientes.push(this.left)
   }
   if (this.right !== null) {
      pendientes.push(this.right)
   }
   cb(this.value)

   if (pendientes.length > 0) {
      pendientes.shift().breadthFirstForEach(cb, pendientes)
   }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
