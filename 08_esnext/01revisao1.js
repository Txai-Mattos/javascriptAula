//let e const
{
    let a = 10
    var b = 10
    console.log(a);
}
console.log(b);

//template string
let variavel = 'a'
console.log(` texto: ${variavel}`)

//destructuring
const [l,e,...tras] = 'texto que será desestruturado'
console.log(l,e,tras);

const [x, ,y] = [1,2,3]

const {idade:i, nome} = {nome:'ana',idade:20} //renomeando 1 atriudo do obketo para i no destructing, pegando nome com o nome normal
console.log(i,nome);