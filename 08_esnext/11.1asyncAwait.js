//com promisse simulando igual acom callback
const http = require('http')

const getTurma = (letra) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    return new Promise((resolve, reject) => {
        http.get(url, res => {

            let resultado = ''
            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}

//Rercurso ES8
//Objetivo SImplioficar o uso de promisses
let ObterAlunos = async () => {
    const ta = await getTurma('A')    //Se a função não tiver marcada como async o await não funciona
    const tb = await getTurma('B')    //a ideia do await e trab com promisse de maneira mais simples
    const tc = await getTurma('C')      //ele espera aintes de chamr a sequencia, server para deixar o codigo como se fosse sincrono

    return [].concat(ta,tb,tc)
} //função async sempre retorna uma objeto do tipo AsyncFunction

ObterAlunos()
.then(alunos => alunos.map(a => a.nome))//tem que usar o thne para consegui acessar o resultado por qie o retorno é um objeto AsyncFunction e não o que foi retornado pela function aysnc
.then(nomes => console.log(nomes))
