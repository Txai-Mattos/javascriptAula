
//Vem da mesma instacia pois é sengleton
const contadorA = require('./07InstanciaUnica')
const contadorb = require('./07InstanciaUnica')

const contadorc = require('./07instaciaNova')() //como foi exportado uma função tem que usar o () pra invocala
const contadord = require('./07instaciaNova')() //como foi exportado uma função tem que usar o () pra invocala

//como node faz cache dos objetos, ou seja se ele ja tiver sido criado é retornada a mesm instacia
contadorA.inc()
contadorA.inc()
console.log(contadorA.valor,contadorb.valor)

//como criamos novas instacias ao usar a função o contador fica independete
contadorc.inc()
contadorc.inc()
console.log(contadorc.valor,contadord.valor)