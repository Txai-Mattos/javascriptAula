// tem a oção resolve(quando da certo),reject(quando dá errado)
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase, 'abc')  // o resolve recebe somente um parametro, é chamado para quand dá OK
        }, segundos * 1000)
    })
}

falarDepoisDe(3,'Que Legal!')
.then((frase,abc)=>{    //then é chamad quando chegfa no cenário de OK
    console.log(abc)    //a variavel não tem valor pois o resolve recebe somente um parametro
    return frase.concat('?!?')
}) 
.then(outrafrase => console.log(outrafrase))


// tem a oção resolve(quando da certo),reject(quando dá errado)
function falarDepoisDeComReject(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(frase) 
        }, segundos * 1000)
    })
}

falarDepoisDeComReject(3,'Dando erro')
.then((frase,abc)=>{    //then é chamad quando chegfa no cenário de OK
    console.log(abc)    //a variavel não tem valor pois o resolve recebe somente um parametro
    return frase.concat('?!?')
}) 
.then(outrafrase => console.log(outrafrase)) //tem ter arias then's enfieleiradas
.catch(e => console.log(e)) //quando estoura o reject tem que ter um catch
