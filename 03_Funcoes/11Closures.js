//closure é o escopo criado quando a função é declarada
//esse escopo permite a função acessar e manipular varíaveis externas a função

//contexto léxico em ação
const x = 'AquiGlobal'

function fora() {
    const x = 'AquiDentro'
    function dentro() {
        return x        //Função em JS consegue usar os parametros do contesto onde ela esta inserida e não somente os passados por parametros
    }
    return dentro
}

const minhaFuncao = fora()

console.log(minhaFuncao()); 
