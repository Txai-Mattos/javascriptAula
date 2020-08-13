console.log(soma(2,4)); //uma função no formato function declaration pode ser usada antes de sua declaração pois
//o interpertador do java script carrega primeiro todas as funções para depois executalas
// permitindo que seja colocado todas funções desse tipo juntas em um bloco no fim do codigo como algumas pessoas gostam de fazer
//function declaration
function soma(a,b) {
    return a+b
}

//function expression
function sub(a,b) {
    return a-b
}
console.log(sub(3,4)); //a function expression somente pode ser usada depois a declaração da mesma

//named function expression     //A unica vantagem desse tipo para as demais é ue no stacktrace vai mostrar o nome da funçãp
const mult = function mult(a,b) { 
   return a*b
}
console.log(mult(3,4)); //a  named function expression somente pode ser usada depois a declaração da mesma