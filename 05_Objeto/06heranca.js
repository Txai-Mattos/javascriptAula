/**********************PARTE 1 */
const ferrari = {
    modelo: 'f40',
    velMax: 324
}
const volvo = {
    modelo: 'v40',
    velMax: 200
}

console.log(ferrari.__proto__);// o _ _proto_ _ , com dois underline acessa o prototype do objeto
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null); // __proto__ aponta para nulo pois não tem classe acima dele

function MeuObjeto() { }
console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype);//prototype -> só está presente em funções. Em objeto o acesso é pelo __proto__
console.log(ferrari.prototype);

/**********************PARTE 2 */
Object.prototype.attr0 = '0' //Muito cuidado ao usar
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '200' }
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr1, filho.attr0, filho.attr3); //filho.attr0=> a hierarquia maxima é o Object.prototype 
//filho.attr3 => sempre obtem da mais próxima, no caso do filho e não do pai

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari1 = {
    modelo: 'f40',
    velMax: 324, //shadowing    
}

const volvo1 = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari1, carro)
Object.setPrototypeOf(volvo1, carro)

console.log(ferrari1);
console.log(volvo1);

volvo1.aceleraMais(100)
console.log(volvo1.status());

ferrari1.aceleraMais(300)
console.log(ferrari1.status());

/**********************PARTE 3 ****************/
const pai1 = {
    nome: 'Pedro', corCabelo: 'preto'
}

const filha1 = Object.create(pai1) //Ja cria com o prototype de filha1 sendo pai1
filha1.nome = 'Ana'
console.log(filha1.corCabelo);

const filha2 = Object.create(pai1, {
    nome: { value: 'Bia', writable: false, enumerable: true },
    caixa: { value: '1000' }
})

console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);
console.log(Object.keys(filha2))        //não lista os campos herdados

for (let key in filha2) {
    filha2.hasOwnProperty(key) ?            //se true a key pertence ao objeto
        console.log(key) : console.log(`Por herança: ${key}`)
}

/**********************PARTE 4*****************/
function MeuObjeto() {}

console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__=== obj2.__proto__)
console.log(MeuObjeto.prototype === obj2.__proto__) //O objeto instanciado de uma função construtora aponta para o prototype da função

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function ()  {return console.log(`Bom dia! Meu nome é ${this.nome}!`);}

obj1.falar()
obj2.nome = 'Rafael'    //sobrescrevendo o atributo nome
obj2.falar()


const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype // mudando de Object.prototype para MeuObjeto.prototype o pai do objecto
obj3.nome = 'Obj3'
obj3.falar()

console.log(MeuObjeto.__proto__ === Function.prototype); //é igual
console.log(Function.prototype.__proto__ === Object.prototype); //é igual
console.log(Object.prototype.__proto__ === null); //o atributo existe mais aponta para nulo


/**************************************Parte 5************************** */
console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}
console.log('Coisa Nova'.reverse());

Array.prototype.first = function () {
    return this[0]
}
console.log(['a','b','c'].first());

String.prototype.toString = function () { //sobrescrevendo metodo já existente... da hierarquia tendi a merda
    return 'Lascou Tudo'
}
console.log('Teste Dois'.reverse());

/** Parte 6 */
function Aula(nome,videoID) {
    this.nome = nome
    this.videoID = videoID
}
//função que simula o new através de uma função
function novo(f,...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj,params)
    return obj    
}

const aula3 = novo(Aula,'Bem vindo', 123)
console.log(aula3);






