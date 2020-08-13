//destructuring 1 - Em objetos usa chaves
const pessoa = {
    nome: 'Tx',
    idade: 30,
    endereco:{
        lougradouro:'rua 7 de abril',
        numero: 5
    }
}

const { nome, idade} = pessoa
console.log(nome,idade)

const {nome: a, idade: b} = pessoa
console.log(a,b)

const {sobrenome, bemhumorada = true} = pessoa
console.log(sobrenome,bemhumorada)

const {endereco:{lougradouro,numero,cep}} = pessoa
console.log(lougradouro,numero,cep);

//destructuring 2 - Em Array usa colchetes
const [g] = [10]
console.log(a);

const [n1,,n3,,n5,n6 = 0] = [10,7,9,8]
console.log(n1,n3,n5,n6);

const [,[,nota]] = [[9,8,7,6],[5,4,3,2]]
console.log(nota);


//destructuring 3 - Função objeto
function rand({min=0,max=1000}) {  //function rand({min=0,max=1000} = {}) { com o = {} se o objeto for nulo ele usa vazio
    const valor = Math.random() * (max-min)+min
    return Math.floor(valor)
}

const obj = {max:50,min:40}
console.log(rand(obj));
console.log(rand( { min: 955 } ));
console.log(rand({}));
//console.log(rand()); tem que usar um = {} no parametro para caso ele seja 

//destructuring 4 - função Array
function rand2([min=0,max=1000]) {  //function rand({min=0,max=1000} = {}) { com o = {} se o objeto for nulo ele usa vazio
    if(min>max) [min,max] = [max,min]
    const valor = Math.random() * (max-min)+min
    return Math.floor(valor)
}

console.log(rand2([50,40]));
console.log(rand2( [992]));
console.log(rand2([,10]));
console.log(rand2([]));
//console.log(rand());
