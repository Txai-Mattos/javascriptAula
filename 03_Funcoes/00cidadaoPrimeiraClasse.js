//Função em JS é First-Class Object (citizens)
//High-Order function

//Criar de forma literal
function fun1() { } //mesmo quando não tem retorno retorna undefined, de forma literal não pode se omitir as chaves

//Armazenar em um variavel
const fun2 = function() { } //uma função anonima sendo atribuido a constante

//Armazenar dentro de um array
const array = [function (a,b) {return a+b}, fun1, fun2]
console.log(array[0](2,3));

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar());

//Passar função como parametro para outra função
function run(fun){
    fun()
}
run(function () {console.log('Executando...')})

//Uma função pode retorno/conter um função
function soma(a,b) {
    return function (c) {   //uma função retornando outra função
        console.log(a+b+c);        
    }
}
soma(2,3)(4) //Chamou a primaira função, como o retorno dela foi outa dunção colocou o parentese da segunda pra consegui o retorno da função interna.

const cincoMais = soma(2,3) //armazenou a função resultando em uma constante
cincoMais(4) //chama a função aramzenda atraves da const