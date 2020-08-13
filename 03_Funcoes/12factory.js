// Função factory é uma função que retorna um novo objeto.

//factory simples -- 
function criarPessoa() {
    return {
        nome: 'ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa());

//factory usando parametros
function criarProduto(nome = 'nomeProduto',preco =300.00) {
    return {
        nome: nome,
        preco,
        desconto:0.15
    }
}

console.log(criarProduto());
console.log(criarProduto('notebook',2000.00));
