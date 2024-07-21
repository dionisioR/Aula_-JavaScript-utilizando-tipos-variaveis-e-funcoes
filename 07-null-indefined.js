let nome 
console.log(nome)
console.log(typeof nome)  // undefined
console.log(nome + 3)  // NaN
console.log(nome === undefined ? 'A variável foi declarada mas não teve seu valor atribuído!':nome)
console.log('----')

telefone = null
console.log(telefone)  // null
console.log(typeof telefone)  // object
console.log(telefone + 3) // 3
console.log(telefone === null ? 'Variável declarada como NULL' : telefone)