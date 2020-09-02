const { time } = require("console")

// não indexado /não aceita repetição
const times = new Set()
times.add('Vasco')
times.add('Vitoria').add('São Paulo').add('Galicia')
times.add('Vasco') //nõa aceita repetição, ignora esse pedido

console.log(times);
console.log(times.size)  //qtd elementos
console.log(times.has('vitoria')) // não acha por causa do case sensitive
console.log(times.has('Vitoria'))
times.delete('Vasco') //removendo do set
console.log(times.has('Vasco')); //removido

const nome = ['Carla','Paula','vanessa','Carla']
const nomeSet = new Set(nome) //criando já com variaveis
console.log(nomeSet) //não adicionou o repedito