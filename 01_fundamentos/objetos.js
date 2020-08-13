const prod = {} //par de {} chaves é um objeto; declarou um objeto
prod.nome = 'Celular Ultra Mega' //objeto no mais basico é um conjunto de chave e valor
prod.preco = 6453.9
prod['Desconto legal'] = 0.40 //colocando um atributo com nome com espaço

console.log(prod)

const prod2 = {
    nome: 'Camisa polo',
    preco: 30.30,
    Agregacao : {
        id: 5,
        nome: "ALGO MAIS"
    }
}
console.log(prod2)