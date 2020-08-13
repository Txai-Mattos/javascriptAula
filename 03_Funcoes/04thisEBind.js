//EXEMPLO 01
const pessoa = {
    saudacao : "Bom dia",
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflitos entre paradigima: funcional e OO, o this da função não é o pessoa

const falarDePessoa = pessoa.falar.bind(pessoa) //A função Bind informar o parametro que será usado como this dentro da função especifica
falarDePessoa()                     // essa ação não altera a função inicial somente nesse falarDePessoa que é o resulta da função inicial + o bind


//EXEMPLO 02
function pessoa2(){
    this.idade = 0

    setInterval(function() {   //a função setInterval executa algo no tempo pre definido, nesse caso a cada 1000 milisegundos ele chama a função anonima
        this.idade++
        console.log(this.idade);
    }/*.bind(this)*/, 1000); //com o bind ele passa a pessoa o função pessoa2 como parametro e o this dentro no set Nternval passa a chamr ele
}
new pessoa2 //Retorna Nan //ao instaciar começa a rodar o set interval


function pessoa3(){
    this.idade = 0
    const self = this       //atribuindo o this a uma constante idependente de onde for chamado o this não muda
    setInterval(function() {   //a função setInterval executa algo no tempo pre definido, nesse caso a cada 1000 milisegundos ele chama a função anonima
        self.idade++
        console.log(self.idade);
    }, 1000); 
}
new pessoa3 //Retorna Nan //ao instaciar começa a rodar o set interval