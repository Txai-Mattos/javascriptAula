const produto = [
    {nome: 'Notebook', preco:2499, fragil:true},
    {nome: 'ipod Pro', preco:4199, fragil:true},
    {nome: 'copo de vidro', preco:12.49, fragil:true},
    {nome: 'copo plastico', preco:18.99, fragil:false},

]


//usado para filtrar uma lista
console.log(produto.filter(function(p){
    return false
}));

const caro = p => p.preco >=500
const fragil = p => p.fragil

//recebe item atual, index, array e um cmapo opcional
console.log(produto.filter(caro).filter(fragil));



/**simulando map */
Array.prototype.filter2 = function (callback) {
    const novoArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i],i,this))
            novoArray.push(this[i])
    }
    return novoArray
}

console.log(produto.filter2(caro).filter2(fragil));