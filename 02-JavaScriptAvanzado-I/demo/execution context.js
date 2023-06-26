'use strict'

var sayHello = 'Hello';

function     person() {
    var first = 'David';
    var last = 'Shariff';
        
    function firstName() {
        return first;
    } 
    function lastName() {
        return last;
    } 
    alert(sayHello + ' ' + firstName() + ' ' + lastName());
}