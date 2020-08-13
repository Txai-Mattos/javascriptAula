const fs = require('fs')

const caminho = __dirname + '/11arquivo.json'

//forma sincrona...
const conteudo = fs.readFileSync(caminho,'utf-8')
console.log(conteudo);

//forma assincrona
fs.readFile(caminho,'utf-8',(err,conteudp) => {
    if (err == null || err == undefined){
        const config = JSON.parse(conteudp)
        console.log(`${config.db.host}:${config.db.port}`);
    }else{
        console.log(err);
    }
})

//Uma forma mais simples de ler JSON é imporatando sem a necessidade de realizar parse, agora tem que ter o ".JSON" no final
const config = require("./11arquivo.json") //ness formato a leitura pe sincrona por isso o resultado del sai antes  da leitura assincrona
console.log(config.db); // ele ja traz como objeto

//Lendo de uma Pasta
fs.readdir(__dirname,(err,arquivos)=>{
console.log('conteudo da pasta...')
console.log(arquivos)
})

__dirname// é uma constante presente e, todos os odulos do node que representa o diretório atual