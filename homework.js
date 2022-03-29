'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
return parseInt(num, 2);
}

function DecimalABinario(num) {
  // tu codigo aca
let binario = []
while(num>1){
  binario.push(num%2)
  num = Math.floor(num/2)
}
binario.push(num);
let numBin = parseInt(binario.reverse().join(''))
return ("" + numBin + "");
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}