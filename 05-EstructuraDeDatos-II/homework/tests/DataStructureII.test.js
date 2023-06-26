'use strict'

const {
  Node,
  LinkedList,
  HashTable
} = require('../homework');

describe('Una linked list', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = new LinkedList();
  });

  it('tiene metodos `add`, `remove`, y `search`', function() {
    expect(typeof linkedList.add).toBe('function');
    expect(typeof linkedList.remove).toBe('function');
    expect(typeof linkedList.search).toBe('function');
  });

  it('empiezan head como null', function () {
    expect(linkedList.hasOwnProperty('head')).toBe(true);
    expect(linkedList.head).toBeFalsy();
    expect(linkedList.remove()).toBeFalsy();
  });

  it('tiene una clase Node para representar un nodo', function() {
    expect(typeof Node).toBe('function');
    expect(isNative(Node)).toBe(false);
    function isNative(fn) {
      return (/\{\s*\[native code]\s*\}/).test('' + fn);
    }
  });

  it('La clase Node deberia tomar un valor como argumento y definir next como null por default', function() {
    var node = new Node('test');
    expect(node.value).toBe('test');
    expect(node.next).toBe(null);
  });

  it('linkedlist deberia usar la clase Node para agregar nodos en add', function() {
    linkedList.add('first');
    expect(linkedList.head instanceof Node).toBe(true);
  });

  it('add agrega los elementos linkeandolos entre ellos a traves del next', function() {
    linkedList.add('first');
    linkedList.add('second');
    expect(linkedList.head.value).toBe('first');
    expect(linkedList.head.next.value).toBe('second');
    expect(linkedList.head.next.next).toBe(null);
  });

  it('remove deberia retornar null si la lista esta vacia', function() {
    expect(linkedList.remove()).toBeFalsy();
  });

  it('remove deberia sacar el ultimo nodo ingresado y devolver su valor', function() {
    linkedList.add('first');
    linkedList.add('second');
    expect(linkedList.remove()).toBe('second');
    expect(linkedList.remove()).toBe('first');
  });

  it('el head deberia ser null cuando se sacan todos los nodos', function() {
    expect(linkedList.remove()).toBeFalsy();
    linkedList.add('one');
    expect(linkedList.remove()).toBe('one');
    expect(linkedList.remove()).toBeFalsy();
    expect(linkedList.head).toBeFalsy();
  });


  it('deberia devolver los valores correctos para buscar', function() {
    linkedList.add('one');
    linkedList.add('two');
    linkedList.add('three');
    linkedList.add('four');
    expect(linkedList.search('two')).toBe('two');
    expect(linkedList.search('sdd')).toBe(null);
    expect(linkedList.search('one')).toBe('one');
    expect(linkedList.search('four')).toBe('four');
  });

  it('deberia poder tomar strings y funciones ambos como search inputs', function() {
    linkedList.add('one');
    linkedList.add('two');
    expect(linkedList.search(function(nodeValue) {
      return nodeValue === 'two';
    })).toBe('two');
  });

  it('deberia poder buscar por lo tanto no solo strings pero tambien objetos', function() {
    function UserNode(name, email, city) {
      this.name = name;
      this.email = email;
      this.city = city;
    }

    linkedList.add(new UserNode('Nimit', 'nimit@fs.com', 'New York'));
    linkedList.add(new UserNode('David', 'david@fs.com', 'New York'));
    linkedList.add(new UserNode('Paul', 'paul@yc.com', 'Mountain View'));

    expect(linkedList.search(function (userNode) {
      return userNode.name === 'Nimit';
    }).email).toBe('nimit@fs.com');

    expect(linkedList.search(function (userNode) {
      return userNode.email === 'david@fs.com';
    }).city).toBe('New York');

    expect(linkedList.search(function (userNode) {
      return userNode.city === 'Mountain View';
    }).name).toBe('Paul');
  });

});

describe('HashTable', function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it('deberia tener 35 buckets', function() {
    expect(hashTable.numBuckets).toBe(35);
  });

  it('deberia tener metodos `set`, `get`, y `hasKey`', function() {
    expect(typeof hashTable.set).toBe('function');
    expect(typeof hashTable.get).toBe('function');
    expect(typeof hashTable.hasKey).toBe('function');
  });

  it('deberia `hash` correctament', function() {
    // esta funcion hasheadora deberia sumar los key code de las letras de la palabra,
    // y hacer el mod de ese numero por el numero de buckets .
    expect(hashTable.hash('foo')).toBe(9);
    expect(hashTable.hash('this is a key')).toBe(27);
    expect(hashTable.hash('what about this one')).toBe(13);
  });

  it('deberia guardar y buscar valores por key', function() {
    hashTable.set('key1', 'val1');
    hashTable.set('key2', 'val2');
    hashTable.set('this is a very different string', 44.4);
    expect(hashTable.get('key1')).toBe('val1');
    expect(hashTable.get('key2')).toBe('val2');
    expect(hashTable.get('this is a very different string')).toBe(44.4);
  });

  it('deberia devolver un error cuando el key no es un string', function() {
    expect(function() {
      hashTable.set(false, 'hi');
    }).toThrowError(TypeError, 'Keys must be strings');
  });

  it('deberia manejar colisiones', function() {
    hashTable.set('foo', 'bar1');
    hashTable.set('ofo', 'bar2');
    expect(hashTable.get('ofo')).toBe('bar2');
    expect(hashTable.get('foo')).toBe('bar1');
  });

  it('deberia sobreescribir keys', function() {
    hashTable.set('foo', 'bar1');
    hashTable.set('foo', 'bar2');
    expect(hashTable.get('foo')).toBe('bar2');
  });

  it('deberia devolver booleanos para el metodo #hasKey', function() {
    hashTable.set('foobar', 'fluf cats');
    expect(hashTable.hasKey('foobar')).toBe(true);
    expect(hashTable.hasKey('raboof')).toBe(false);
  });

});
