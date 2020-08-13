// pessoa -> 123 -> {...}
//A constante aponta pra o endereço de memória onde está o objeto
const pessoa = {nome:'João'}
pessoa.nome =  'Pedro' // alterando o valor do antribuito mas a contante ainda aponta para o objeto inicial


//não consegue atribuir outro objeto pois isso alteria o endereço de memória e pessoa é uma constante
//pessoa = {nome: 'Ana'} 

Object.freeze(pessoa) // congela o objeto  não permitindo mais altera-lo
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome); //apesar do comando para alterar o nome não dá erro e não é alterado
console.log(pessoa) //devido ao freese não permite adicionar nem remover campo

//ja cria o objeto com a referÊncia e o objeto constante
const pessoaConstante = Object.freeze({nome: 'Joao'})

