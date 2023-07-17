'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let rta = [1]
  let aux = 2

  while (num !== 1) {
    if (num % aux === 0) {
      rta.push(aux)
      num = num / aux
    } else {
      aux++
    }
  }
  return rta;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // [0,1,2]
  // Tu código:
  let swap = true;
  while (swap) {
    swap = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let aux = array[i]
        array[i] = array[i + 1]
        array[i + 1] = aux
        swap = true;
      }
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  // [5,9,1,3,4]
  //    i
  //j  


  for (let i = 1; i < array.length; i++) {
    let j = i - 1  // 0
    let aux = array[i] // 5
    while (j >= 0 && array[j] > aux) { // 9 > 5
      array[j + 1] = array[j]  // 
      j--
    }
    array[j + 1] = aux;
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  // [5,9,1,3,4]
  //    
  //  

  for (let j = 0; j < array.length - 1; j++) {
    let min = j // índice
    for (let i = j + 1; i < array.length; i++) {
      if (array[i] < array[min]) {
        min = i;
      }
    }
    // Si sigo parado en el ultimo lugar no hago el cambio
    if (j !== min) {
      let aux = array[j]
      array[j] = array[min]
      array[min] = aux
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
