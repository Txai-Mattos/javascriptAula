/**
 * 
 O jeito de passar paramentros de um modulop ara outro é exportando uma função e passando os parametro que vc quer para o outro modulo
 como parametro da função.
 POde criar novas funções dentro de uma função, objeto,
 */

module.exports = function (...nomes) { //...nomes foram de dizer que a quatidade parametreo é variavel
    return nomes.map(nome => `Boa semana ${nome}!`)
}