//MODULOS INTERNOS
//CAMINHO ABSOLUTO
//const moduloA = require('D:/txai/estudo/javascript/07_node/00moduloA.js') //O ".."" serve para volta uma pasta 
//console.log(moduloA.ola);

//CAMINHO RELATIVO
const moduloA = require('../../00moduloA') //O ".."" serve para volta uma pasta 
console.log(moduloA.ola);

const c = require("./pastaC") //como usou o padrão index pode chamar diretamente a pasta sem achamar o modulo, que o node procura o index.js
console.log(c.ola2);

//MODULOS EXTERNOS
const saudacao = require('saudacao') //qual o modulo é externo não precisa idezer o caminho somente qual o modulo
console.log(saudacao.text);



// //MODULO CORE (INTERNOS DOS NODE)
// const http = require('http')
// http.createServer((req,res) => {
//     res.write('Bom dia!')
//     res.end()
// }).listen(8080)