'use strict'; 

var N = require('./arbolBinarioBusqueda.js');
var _ = require('underscore');
var test = require('tape');

test('Rotations', function (t) {
	var tree = new N(3).add(2).add(1).rotate();
    t.deepEqual(tree, new N(2).add(1).add(3), 'Left Left Rotation.')

	tree = new N(5).add(2).add(3).rotate();
    t.deepEqual(tree, new N(3).add(2).add(5) , 'Left Right Rotation.')

    tree = new N(6).add(7).add(4).add(5).add(3).add(2).rotate();
    t.deepEqual(tree, new N(4).add(3).add(2).add(6).add(5).add(7) , 'Left Left Rotation 2.')

	tree = new N(1).add(2).add(3).rotate();
    t.deepEqual(tree, new N(2).add(1).add(3) , 'Right Right Rotation 1.')

    tree  = new N(2).add(1).add(4).add(3).add(5).add(6).rotate();
    t.deepEqual(tree, new N(4).add(2).add(1).add(3).add(5).add(6) , 'Right Right Rotation 2.');

    tree = new N(1).add(3).add(2).rotate(); 
    t.deepEqual(tree, new N(2).add(1).add(3), 'Right Left Rotation.');

    t.end();
});

test('Height', function (t) {
	var tree = new N(1).add(2).add(3).add(4).add(5).add(6);
	t.equal(tree.height(), 5, 'Height of the tree 1.');

	tree = new N(6).add(4).add(3).add(5).add(8).add(7).add(9);
	t.equal(tree.height(), 2, 'Height of the tree 2.');

    t.end();
});


test('Searches', function (t) {

	var tree = new N(1).add(2).add(3).add(4).add(5).add(6);
	t.equal(tree.search(2).data,2,'Search 1.');

	tree = new N(6).add(4).add(3).add(5).add(8).add(7).add(9);
	t.notOk(tree.search(99), 'Search 2.');

    t.end();
});


test('Balance', function (t) {
	var tree = new N(1).add(2).add(3).add(4).add(5).add(6);
	t.notOk(tree.isBalanced(), 'Balance of Tree.');

	tree = new N(6).add(4).add(3).add(5).add(8).add(7).add(9);
	t.ok(tree.isBalanced(), 'Balance of Tree 2.');

	tree = new N(4).add(3).add(2).add(1).add(6).add(5).add(7);
	t.notOk(tree.isBalanced(), 'Balance of Tree 3.')
    t.end();
});

test('Balance Factor', function (t) {
	var tree = new N(1).add(2).add(3).add(4).add(5).add(6);
	t.equal(tree.balanceFactor(), 5, 'Balance Factor of Node.');

	tree = new N(1).add(2).add(3).add(4).add(5).add(6).add(0);
	t.equal(tree.balanceFactor(), 4, 'Balance Factor of Node 2.');

	tree = new N(6).add(4).add(3).add(5).add(8).add(7).add(9);
	t.equal(tree.balanceFactor(), 0, 'Balance Factor of Node 3.');

    t.end();
});

test('Auto Balance', function (t) {
	var tree = new N(1).insert(2).insert(3).insert(4).insert(5).insert(6).insert(7);
	t.deepEqual(tree, new N(4).add(2).add(1).add(3).add(6).add(5).add(7) , 'Auto Balance on Insert 1.');


	tree = new N(7).insert(6).insert(5).insert(4).insert(3).insert(2).insert(1);
	t.deepEqual(tree, new N(4).add(2).add(1).add(3).add(6).add(5).add(7) , 'Auto Balance on Insert 2.');


	tree = new N(22).insert(20).insert(62).insert(36).insert(60).insert(78).insert(68)
				.insert(5).insert(37).insert(49);
	var correct = new N(60).add(22).add(20).add(37).add(5).add(36).add(49).add(68).add(62).add(78);
	t.deepEqual(tree,  correct , 'Auto Balance on Insert random numbers 1.');

	tree = new N(100).insert(62).insert(34).insert(15).insert(21).insert(86).insert(12)
				.insert(8).insert(8).insert(92);
	correct = new N(62).add(12).add(8).add(8).add(21).add(15).add(34).add(92).add(86).add(100);
	t.deepEqual(tree,  correct , 'Auto Balance on Insert random numbers 2.');

	tree = new N(87).insert(93).insert(61).insert(80).insert(8).insert(89).insert(22)
				.insert(91).insert(60).insert(33);
	correct = new N(87).add(60).add(22).add(8).add(33).add(61).add(80).add(91).add(89).add(93);
	t.deepEqual(tree,  correct , 'Auto Balance on Insert random numbers 3.');

	tree = new N(100).insert(62).insert(34).insert(15).insert(21).insert(86).insert(12)
				.insert(8).insert(8).insert(92).insert(25).insert(70).insert(55).insert(6).insert(22);
	correct = new N(21).add(12).add(8).add(6).add(8).add(15).add(62).add(34).add(25).add(55).add(22).add(92).add(86).add(100).add(70);
	t.deepEqual(tree,  correct , 'Auto Balance on Insert random numbers 4.');

	t.end();
});


test('Deleting Nodes', function (t) {
	var tree = new N(1).insert(2).insert(3).insert(4).insert(5).delete(4);
	var correct = new N(2).add(1).add(3).add(5);
	t.deepEqual(tree, correct, 'Deleting Nodes 1.')

	tree = new N(1).insert(2).insert(3).insert(4).insert(5).delete(2);
	correct = new N(4).add(1).add(3).add(5);
	t.deepEqual(tree, correct, 'Deleting Nodes 2.')

	tree = new N(87).insert(93).insert(61).insert(80).insert(8).insert(89).insert(22)
				.insert(91).insert(60).insert(33).delete(60);
	correct = new N(87).add(33).add(22).add(8).add(61).add(80).add(91).add(89).add(93);
	t.deepEqual(tree,  correct , 'Delete with random numbers 3.');

	tree = new N(87).insert(33).insert(22).insert(8).insert(61).insert(80).insert(91).insert(89).delete(33);
	correct = new N(80).add(22).add(8).add(61).add(89).add(87).add(91);
	t.deepEqual(tree,  correct , 'Delete with random numbers 4.');

	tree = new N(87).insert(93).insert(61).insert(80).insert(8).insert(89).insert(22)
				.insert(91).insert(60).insert(33).delete(60).delete(33);
	correct = new N(87).add(22).add(8).add(61).add(80).add(91).add(89).add(93);
	t.deepEqual(tree,  correct , 'Delete with random numbers 5.');

	tree = new N(1).insert(2).insert(3).insert(4).insert(5).insert(6).insert(7).insert(8)
				.delete(8).delete(7).delete(6).delete(5).delete(4).delete(3).delete(2).delete(1);
	t.deepEqual(tree,  null , 'Completely delete 6.');

	tree = new N(8).insert(7).insert(6).insert(5).insert(4).insert(3).insert(2).insert(1)
				.delete(8).delete(7).delete(6).delete(5).delete(4).delete(3).delete(2).delete(1);
	t.deepEqual(tree,  null , 'Completely delete Same order 7.');

	tree = new N(8).insert(7).insert(6).insert(5).insert(4).insert(3).insert(2).insert(1)
				.delete(1).delete(2).delete(3).delete(4).delete(5).delete(6).delete(7).delete(8);
	t.deepEqual(tree,  null , 'Completely delete Inversed order 8.');

	t.end();
});