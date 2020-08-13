const saudacao = 'oi' //contexto lexico 1

function exec() {
    const saudacao = 'falaaaaa'//contexto lexico 2
    return saudacao
}

//objetos sao grupos alinhados de chave valor
const client =
{
    nome: 'nome',
    rua: 'aqui',
    endereco: {
        numero: 10
    }
}

console.log(saudacao);
console.log(exec());
console.log(client);



