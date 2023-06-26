'use strict';

function BinarioADecimal(num) {
   // '101101'
   var binary = num.split('').reverse().join('')  // ['1', '0', '1', '1', '0', '1']
   var suma = 0;

   for (let i = 0; i < binary.length; i++) {
      suma += parseInt(binary[i]) * 2 ** i
   }

   return suma;
}

function DecimalABinario(num) {
   var binary = []

   while (num !== 0) {
      var digito = num % 2
      num = Math.floor(num / 2)
      binary = digito + binary
   }
   return binary;

}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
