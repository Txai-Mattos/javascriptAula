
//ARROW FUNCTION
const soma = (a,b) => a+b //função arrow sempre são anonomias por isso qeu quiser chamar tem que atribui=la a alguma constante
console.log(soma(1,2));

//ARROW FUNCTION (THIS)
const lexico1 = () => console.log(this===exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2() //o this não muda como mudaria em uma funçaõ tradicional, com bind aplly ou a depender de onde chame

//parametro default
function padrao(texto ='node') {
    console.log(texto)
}

//operador rest(agruador) ...params, tbm chamado de Spread(propagador) para uso de outras formas
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2,3,5,6,8));