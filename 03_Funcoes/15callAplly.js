function getPreco(imposto=0,moeda='R$') {
    return `${moeda} ${this.preco * (1-this.desc)*(1+imposto)}`
}

const produto = {
    nome:'Notebook',
    preco:4589,
    desc:0.15,
    getPreco //como já tem a função declarada acima podemos atribuir assim diretamente que ja cria com o nome
            //e fica
}

console.log(getPreco()); //o this não encontra porque esta no escopo global
global.preco = 20; global.desc = 0.1
console.log(getPreco()); // depois de coloca no global ele encontra
console.log(produto.getPreco());//chamando no produto o this busca no produto

const carro = {preco: 7667, desc: 0.20}
//no metodo call executa a função passando como parametro o contexto onde vai ser executado nesse caso o carro
console.log(getPreco.call(carro))
console.log(getPreco.call(carro, 0.30,'$')) //nos parametros: contexto, paramentros da função passados diretamente na ordem passada

//no metodo apply executa a função passando como parametro o contexto onde vai ser executado nesse caso o carro
console.log(getPreco.apply(carro)) 
console.log(getPreco.apply(carro,[0.17,'$']))  //nos paramtros: contexto, array com os parametros das funções



