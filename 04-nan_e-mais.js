console.log(5 * 'a')  // NaN
console.log(5 * '5')  // 25
console.log(parseInt('texto'))  // NaN
console.log(true)  // true
console.log(false)  // false
console.log(Math.sqrt(-1))  // NaN
console.log('----------------')

// verificar se um número é NaN (Não é um número)
const numero = 10
const texto = 'Um texto qualquer...'
console.log(isNaN(numero))  // false [é um número]
console.log(isNaN(texto))  // true [não é um número]

console.log('----------------')
const numeroInteiro = 10
console.log(numeroInteiro, typeof numeroInteiro)  // 10 number
const numeroFlutuante = 10.5
console.log(numeroFlutuante, typeof numeroFlutuante)  // 10.5 number
const numeroHexadecimal = 0xA
console.log(numeroHexadecimal, typeof numeroHexadecimal)  //  10 number
const numeroOctal = 0o10
 console.log(numeroOctal, typeof numeroOctal) // 8 number