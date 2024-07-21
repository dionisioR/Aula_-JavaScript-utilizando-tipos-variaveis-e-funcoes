// escopo criado com var
if(1 > 0){
    var estudante = 'Anna'
    console.log(estudante)
}

estudante = "Juca"
console.log(estudante)
console.log('----------------')
//-----------------------------
// escopo criado com let
if(1 > 0){
    let estudante = 'Maria'
    console.log(estudante)
}

// na linha a seguir o JavaScript criará uma outra variável estudante e colocará implicitamente a palavra 'var' em sua frente para que ela seja criada
// var estudante = "Juca"
estudante = "Juca"
console.log(estudante)
console.log('----------------')

//-----------------------------
// escopo global
// variáveis criadas em escopo global podem ser acessadas em qualquer bloco
let nome;
if(1 > 0){
    nome = 'Maria'
    console.log(nome)
}
console.log(nome)
console.log('----------------')
