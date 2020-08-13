//como classe ->
class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`meu nome é ${this.nome}`);
        
    }
}

const p1 = new Pessoa('laise')
p1.falar() //o uso do this pode causar erro a depender do lugar onde ele chama

//como função factory ->
const criarPessoa = nome =>  {
    return{
        
        falar: () => console.log(`meu nome é ${nome}`)
    }

}

let p2 = criarPessoa('TX')
p2.falar()
 

//COmo função construtora -> 
 function criarPessoaConstrutora (nome) {
   this.nome = nome 
    this.falar = () => console.log(`meu nome é ${nome}`)
}

const p3 = new criarPessoaConstrutora('Dadyy')
p3.falar()

