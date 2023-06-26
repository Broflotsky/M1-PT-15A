'use strict'

/* ARRAYS FUNCTIONS */

// MENOR

function minimo(arr) {
  var aux = arr[0];
  for (var i=1; i<arr.length; i++) {
    if (arr[i]<aux) aux = arr[i];
  }
  console.log('El minimo es: ', aux);
  return aux;
}

// MAYOR

function mayor(arr) {
  var aux = arr[0];
  for (var i=1; i<arr.length; i++) {
    if (arr[i]>aux) aux = arr[i];
  }
  console.log('El mayor es: ',aux);
  return aux;
}

// TOTAL

function total(arr) {
  var aux = arr.reduce(function(tot,num){
    return tot+num;
  })
  console.log('El total es: ', aux);
  return aux;
}

function totalBis(arr) {
  var aux = 0;
  for (var i=0; i<arr.length; i++) {
    aux += arr[i];
  }
  console.log('El total es: ', aux);
  return aux;
}

// PROMEDIO

function promedio(arr) {
  var len = arr.length,
    aux = arr.reduce(function(tot,num) {
      return tot+num;
    })
  console.log('El promedio es: ',aux/len);
  return aux/len;
}

function promedioBis(arr) {
  var aux = 0;
  for (var i=0; i<arr.length; i++) {
    aux += arr[i];
  }
  console.log('El promedio es: ',aux/i);
  return aux/i;
}
