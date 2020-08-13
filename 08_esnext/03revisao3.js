//ES8 Object.Values/Object.Entries
const obj = {a:1,b:2,c:3}
console.log(Object.keys(obj)); //ja existia
console.log(Object.values(obj));
console.log(Object.entries(obj));

//melhorias na Notação literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola(){
        return 'Oi gente'
    }
}
console.log(pessoa.nome,pessoa.ola());

//Class
class animal {}
class cachorro extends animal { //herança em classe
    falar(){
        return 'Au Au'
    }
}

console.log(new cachorro().falar())