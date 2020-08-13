const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa));       //todas as chaves
console.log(Object.values(pessoa));     //todos os valores
console.log(Object.entries(pessoa));    //array maior onde os elementos são arrays de 2 posições

Object.entries(pessoa).forEach(e => {   //usando foreach e mostrando pelo index do array
    console.log(`${e[0]}: ${e[1]}`);
});

Object.entries(pessoa).forEach(([chave, valor]) => {   //usando destructing
    console.log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, 'dataNascimento',{       //1º o traget,2ºnomeDoParamentro
        enumerable: true, //pode ser listada, na Object.keys
        writable: false, //ñ pode ser escrita, só vai ter o valor inicial quando foi criada
        value: '01/07/2020'
    }
)

pessoa.dataNascimento = '01/01/2020'    // não irá alterar porque está writable
console.log(pessoa.dataNascimento);

//object.assign (ECMScript 2015)
const dest = {a:1}
const o1 = {b:2}
const o2 = {c:4,a:10}
const obj = Object.assign(dest,o1,o2) //vai concatendo os atributos e se tiver o mesmo nome de atrobuto o que fica é o de ultimo valor informado
console.log(dest,obj);

Object.freeze(obj) //trava os atributos do objeto, não permitindo alterar


