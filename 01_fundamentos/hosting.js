//jogar para cima Içar
console.log("a=",a) // a declaração da variavel a foi içada para não dá erro por não existir
var a = 2 //se comentar essa linha da erro
console.log("a=",a)


function teste (){
//jogar para cima Içar tabem é içada dentro do escopo de function
console.log("b=",b) // a declaração da variavel a foi içada para não dá erro por não existir
var b = 2 //se comentar essa linha da erro
console.log("b=",b)

}

//jogar para cima Içar
console.log("c=",c) // com let não funciona o hosting
let c = 2 //se comentar essa linha da erro
console.log("a=",c)
