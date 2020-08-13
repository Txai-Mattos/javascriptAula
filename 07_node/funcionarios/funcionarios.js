const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require("axios")

// //forma Txai de fazer
// axios.get(url).then(response => {
//    const funcionarios = response.data

//     let chinesasMulheres = funcionarios.filter(func => {        
//         return func.genero === 'F' && func.pais === 'China'
//     }).reduce(
//         (func,funcATual) => func.salario < funcATual.salario ? func : funcATual
//     )
//     console.log(chinesasMulheres)
// })

//mulher chinessa de meno salario
//forma Professo de fazer
const mulheres = f => f.genero === 'F'
const chinesse = f => f.pais === "China"
const menorSalario = (func, funcAtual) => func.salario < funcAtual.salario ? func : funcAtual
axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios);
    //mulher chinessa de meno salario
    const func = funcionarios
        .filter(mulheres)
        .filter(chinesse)
        .reduce(menorSalario)
    console.log(func);
})


