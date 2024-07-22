// texto()  - Se tentarmos chamar uma expressão de função antes de sua declaração teremos um erro
const texto = function(){
    console.log(`Exemplo de um texto qualquer...`)
}
texto()

const nome = function(nome='Cliente'){
    console.log(`Olá ${nome}`)
}

nome('Rafael')
nome('Anna')
nome()

const soma = function(a, b){
    return a + b
}

console.log(soma(5, 3))
console.log(soma(10, 20))
console.log(soma(15, 15))