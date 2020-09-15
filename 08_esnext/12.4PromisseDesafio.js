const fs = require('fs')
const path = require('path')
const { stringify } = require('querystring')

const caminho = path.join(__dirname,'dados.txt')

const lerArquivo = caminho => {
    return new Promise(resolve =>{
        fs.readFile(caminho,function(_,conteudo){
            resolve(conteudo.toString())
        })

        console.log('Depois de ler');
    }  
    )
}

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))    
    .then(linhas => linhas.join(','))
    //.then(conteudo => conteudo.replace('\r',''))
    .then(conteudo => `o valor final é ${conteudo}`)
    .then(conteudo => console.log(conteudo),
    err => console.log(`Erro especifico ${err}`)) //dentro do then pode ter umsegundo parametro que se refere ao tratamento de erro especifico para aquele paramentro q
    .catch(erro => console.log(erro))          //quando é assim o erro é tratado ai não chamndo o .actach nda das chamadas
    .then(() => console.log('FIM')) //depoís do catach o then não pega mais o valord o then anterior e se no then anterior ocorreu erro ele não sera pegono catch

    O erro sempre vai estouranar no primeiro catch que achar
se o cacth tiver no meio vc não consegui passar os rersutlados para os then seguintes.
