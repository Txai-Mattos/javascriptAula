//Armazena uma função em uma variavel
const imprimirSoma = function(a,b){ //Função anonima, é uma função sem nome
    console.log(a + b)
}

imprimirSoma(2,3)

//Armazena uma função arrow em uma variavel
const soma = (a,b) => {
    return a + b
}

console.log(soma(2,3))

//retorno implícito
const subtracao = (a,b) => a-b //arrow function com retorno implicito só funciona com 1 linha de retorno

console.log(subtracao(5,2))

const imprimir2 = a => console.log(a)
imprimir2("Legal!!!")