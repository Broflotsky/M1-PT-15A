const {
    countArray,
    countProps,
    mergeQueues,
    closureMult
} = require('../Repaso-M1.js')

const {
    LinkedList,
    Queue,
    BinarySearchTree
} = require('../DS.js')

describe('countArray', () => {
    it("debe determinar la suma de todos los números contenidos en el array.", () => {
        expect(countArray([1,1,1,1,1,1,1,1,1,1])).toBe(10)
    })
    it("debe determinar la suma de todos los números incluso si existen arrays anidados.", () => {
        expect(countArray([1, [2, [3,4]], [5,6], 7])).toBe(28)
    })
    it("debe determinar la suma de todos los números incluso si existen mas arrays anidados.", () => {
        expect(countArray([1, [2, [3,[4,4,4]]], [5,6], 7])).toBe(36)
    })
})

describe('countProps', () => {
    it('debe determinar la cantidad correcta de propiedades de un objeto', () => {
        const objeto = {
            a: 1,
            b: 2,
            c: 3,
            d: 4
        }
        expect(countProps(objeto)).toBe(4)
    })

    it('debe determinar la cantidad correcta de propiedades de un objeto, incluso con objetos aninados dentro del primero', () => {
        const objeto = {
            a: {
                a1: 10,
                a2: 'Franco',
                a3: {f: 'r', a: 'n', c: {o: true}}
            },
            b: 2,
            c: [1, {a: 1}, 'Franco']
            }
        expect(countProps(objeto)).toBe(10)
    })
})

describe('changeNotNumbers', () =>{
    it('deberá cambiar aquellos valores que no puedan castearse(convertirse) a numeros por `Kiricocho` y devolver la cantidad de cambios que hizo', () => {
        let listOne = new LinkedList();
        listOne.add(1);
        listOne.add('2');
        listOne.add(false);
        listOne.add('Franco');

        expect(listOne.changeNotNumbers()).toBe(1)
        expect(listOne.search(1)).toBe(1)
        expect(listOne.search('2')).toBe('2')
        expect(listOne.search(false)).toBe(false)
        expect(listOne.search('Franco')).toBe(null)
        expect(listOne.search('Kiricocho')).toBe('Kiricocho')

    })

    it('deberá cambiar aquellos valores que no puedan castearse(convertirse) a numeros por `Kiricocho` y devolver la cantidad de cambios que hizo, en una nueva lista!', () => {
        let listTwo = new LinkedList();
        listTwo.add('uno');
        listTwo.add('2');
        listTwo.add(3);
        listTwo.add('cuatro');
        listTwo.add('cinco');

        expect(listTwo.changeNotNumbers()).toBe(3)
        expect(listTwo.search('uno')).toBe(null)
        expect(listTwo.search('2')).toBe('2')
        expect(listTwo.search(3)).toBe(3)
        expect(listTwo.search('cuatro')).toBe(null)
        expect(listTwo.search('cinco')).toBe(null)
        expect(listTwo.search('Kiricocho')).toBe('Kiricocho')
    })
})

describe('mergeQueues', () => {
    it('a partir de dos queues recibidas por parametro debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.', () => {
        var queueOne = new Queue();
        queueOne.enqueue(1);
        queueOne.enqueue(3);
        queueOne.enqueue(5);
        queueOne.enqueue(7);
        queueOne.enqueue(9);
        var queueTwo = new Queue();
        queueTwo.enqueue(2);
        queueTwo.enqueue(4);
        queueTwo.enqueue(6);

        let newQ = mergeQueues(queueOne, queueTwo)
        expect(typeof mergeQueues(queueOne, queueTwo)).toBe('object');
        expect(typeof newQ).toBe('object');
        expect(newQ.size()).toBe(8);
        expect(newQ.dequeue()).toBe(1);
        expect(newQ.dequeue()).toBe(2);
        expect(newQ.dequeue()).toBe(3);
        expect(newQ.dequeue()).toBe(4);
        expect(newQ.dequeue()).toBe(5);
        expect(newQ.dequeue()).toBe(6);
        expect(newQ.dequeue()).toBe(7);
        expect(newQ.dequeue()).toBe(9);

    })

    it('a partir de dos nuevas queues recibidas por parametro debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.', () => {
        var queueTree = new Queue();
        queueTree.enqueue(7);
        queueTree.enqueue(3);
        queueTree.enqueue(5);
        var queueFour = new Queue();
        queueFour.enqueue(2);
        queueFour.enqueue(4);
        queueFour.enqueue(6);

        let newQ = mergeQueues(queueTree, queueFour)
        expect(typeof mergeQueues(queueTree, queueFour)).toBe('object');
        expect(typeof newQ).toBe('object');
        expect(newQ.size()).toBe(6);
        expect(newQ.dequeue()).toBe(7);
        expect(newQ.dequeue()).toBe(2);
        expect(newQ.dequeue()).toBe(3);
        expect(newQ.dequeue()).toBe(4);
        expect(newQ.dequeue()).toBe(5);
        expect(newQ.dequeue()).toBe(6);
    })
})

describe('closureMult', () => {
    it('debe generar nuevas funciones que representen las tablas de multiplicacion de dinstintos numeros, como la tabla del 4.', () => {
        let multByFour = closureMult(4);
        expect(multByFour(2)).toBe(8);
        expect(multByFour(5)).toBe(20);
        expect(multByFour(6)).toBe(24);
        expect(multByFour(10)).toBe(40);
    })

    it('debe generar nuevas funciones que representen las tablas de multiplicacion de dinstintos numeros, como la tabla del 9.', () => {
        let multByFour = closureMult(9);
        expect(multByFour(2)).toBe(18);
        expect(multByFour(5)).toBe(45);
        expect(multByFour(6)).toBe(54);
        expect(multByFour(10)).toBe(90);
    })
})

describe('Sum', () => {
    it('el método sum dentro del prototype de BinarySearchTree que debe retornar la suma total de los valores dentro de cada nodo del arbol', () => {
        var bst = new BinarySearchTree(15);
        bst.insert(10);
        bst.insert(17);
        bst.insert(5);
        bst.insert(7);
        bst.insert(3);
        bst.insert(25);
        expect(bst.sum()).toBe(82)
    })

    it('el método sum dentro del prototype de BinarySearchTree que debe retornar la suma total de los valores dentro de cada nodo del arbol, para un nuevo Arbol', () => {
        var bst = new BinarySearchTree(10);
        bst.insert(10);
        bst.insert(10);
        bst.insert(10);
        bst.insert(10);
        bst.insert(10);
        expect(bst.sum()).toBe(60)
    })
})
