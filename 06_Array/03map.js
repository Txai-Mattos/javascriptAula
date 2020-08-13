/** Parte 1  */
const nums = [1,2,3,4,5]


//O map gera um novo array exatamente igual, porém com a alteração feita pela function passada, a funçaõ deve ter um retorno
let resultado  = nums.map(function(e){
    return e * 2
})

console.log(resultado,nums)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

/** Parte 2 */
const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

console.log(carrinho.map(e => JSON.parse(e)).map(e => e.preco))

/**Parte 3 */
//SIMULANDO MAP
const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i],i,this))        
    }
    return newArray
}

console.log(carrinho.map2(e => JSON.parse(e)).map2(e => e.preco))