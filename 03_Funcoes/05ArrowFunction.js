/**
 * EXEMPLO 1 com um parametro
 */
let dobro = function (a) { //FUNÇÃO NA FORMA LITERAL
    return 2 * a
}
dobro = (a) => { //CRIAÇÃO NO FORMATO ARROW FUNCTION 1
    return 2 * a
}
dobro = a => 2 * a //como só tem um parametro não precisa dos parenteses
                    //como só é uma linha de execução na função não precisa das chaves com o bloco {}
                    //  o nome "return" pode ser implicito
console.log(dobro(Math.PI));

/**
 * EXEMPLO 2 sem parametro
 */
 let ola = function () {
     return "OLA!"
 }
 
 ola = () => 'Olá'
 ola = _ => 'Olá' //Cria o arrow function mas não é sem paramentro é passando "_" de parametro só que sem usar

 console.log(ola());
 
/**
 * EXEMPLO 3 arrow function com this
 */
 function pessoa(){
     this.idade = 0
     setInterval(() => {
         this.idade++
         console.log(this.idade); //mesmo sendo chamado dentro do temporizador no arrow function o this é o this do contexto lexico nesse independente de onde chama
     }, 10000);
 }
 new pessoa

 /**
 * EXEMPLO 4 arrow function comparar com THIS
 */
let comparaComThis = function (params) {
    console.log(this === params);
}
comparaComThis(global)
const obj ={}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrowFunction = params => console.log(this ===params);
comparaComThisArrowFunction(global)
comparaComThisArrowFunction(module.exports)

comparaComThisArrowFunction = comparaComThisArrowFunction.bind(obj) //bind não funciona com arrow function
comparaComThisArrowFunction(obj)
comparaComThisArrowFunction(module.exports)