//atribuição por referencia quando for um objeto, const algo = {nome:"teste"}
//atribuição por valor quando for por tipo primitivo, por xemplo inteiro
let valor //não inicializado
console.log(valor)

valor = null
console.log(valor)


const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.55
console.log(produto)

console.preco = undefined //tem como atribuir o undefined mas não é um boa prática
console.log(!!produto.preco)
//delete produto.preco  //metodo para removar o atributo do objeto

 console.preco = null