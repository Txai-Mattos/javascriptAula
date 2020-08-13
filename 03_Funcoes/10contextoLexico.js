const valor = 'Global'

function minhaFuncao(){
    console.log(valor);
    
}
function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec() // mesmo com a variavel valor dentro da função exec a minhaFunção sabe o contexto onde ela foi declarada e pricura a veriavel lá
//inves de procurar onde ela foi executada