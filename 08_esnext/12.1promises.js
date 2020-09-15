
const primeiroElemento = stringOuArray => stringOuArray[0]
const letraMinuscula = letra => letra.toLowerCase()

let p = new Promise(resolve => { //é uma processa e 
    resolve(['Ana','Carla']) //comprindo a promessa
})

p.then(primeiroElemento)
.then(primeiroElemento)
.then(letraMinuscula)
.then(console.log)