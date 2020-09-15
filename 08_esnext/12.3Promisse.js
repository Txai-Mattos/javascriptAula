function GerarNumeros(min,max) {
    if(min>max){
        [max,min] = [min,max]
    }

    return new Promise(resolve => {
        const fatorMultiplicacao = max-min+1
        const aleatorio =parseInt(Math.random() * fatorMultiplicacao)+min
        resolve(aleatorio)
    })
}

GerarNumeros(1,60)
    .then(num => num *10)
    .then(numx10 => `o num gerado foi ${numx10}`)
    .then(console.log)