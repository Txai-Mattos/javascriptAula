function GerarNumeros(min, max, numeroProibidos) {
    if (min > max) {
        [max, min] = [min, max]
    }
    return new Promise((resolve, reject) => {
        const fatorMultiplicacao = max - min + 1
        const aleatorio = parseInt(Math.random() * fatorMultiplicacao) + min
        if (numeroProibidos.includes(aleatorio)) {
            reject('numero Repetido!!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdNum, tentativa = 1) { //sempre que marca um funcção com asyncrona ela ira retornar uma promessa
    try {
        const numeros = []
        for (let _ of Array(qtdNum).fill()) {
            numeros.push(await GerarNumeros(1, 60, numeros))
        }
        return numeros
    }            //retorna usando o returno chama o resolve
    catch(e) {
        if (tentativa > 10) {
            console.log(`Tentativa: ${tentativa}`)
            throw "Que chato!!!"  //retornar com execção u throw retorna um reject
        }else{
            return gerarMegaSena(qtdNum, tentativa + 1)
        }
    }
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)

// //Testando se funciona
// GerarNumeros(1, 5, [2, 3, 4])
//     .then(console.log)
//     .catch(console.log)