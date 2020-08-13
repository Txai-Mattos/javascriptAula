const fs = require('fs')

const produto = {
    nome: 'celular',
    preco: 850.56,
    desconto: 0.15
}

fs.writeFile(__dirname+'/arquivoGerado.json',JSON.stringify(produto),(err)=>{
     console.log(err||'12Arquivo salvo!'); //se erro foir nulo é convertido a falso e exibe a mensagem
})