function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
return soma
}
//pode pegar os parametros passados mesmo sem declarado que precisa de parametros na função
console.log(soma()); 
console.log(soma(2,3)); 
console.log(soma(1.1,2.2,3.3)); 

console.log(soma(1,2,"teste")); 
console.log(soma("a","b","c")); 