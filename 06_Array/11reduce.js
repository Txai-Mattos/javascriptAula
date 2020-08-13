/**Parte 1 */
//função para transformar array, vai passando o resultado da operação anterior para a proxima interação
const alunos = [
    {nome:'João',nota:7.3,bolsista:false},
    {nome:'Maria',nota:9.2,bolsista:true},
    {nome:'Pedro',nota:9.8,bolsista:false},
    {nome:'Ana',nota:8.7,bolsista:true}
]

/*
const resultado = alunos.map( a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador,atual)    
    return acumulador + atual
},0) //o 2º parametro do reduce é o valor inicial que será usado como acumulador, quando não passa ele usa o
//primeiro como acumulador e começa a interação do segundo elemento
*/

/**Desafio1 */
const todosOsAlunosSaoBolsistas = alunos.reduce(function (acumulador,atual) {
    return acumulador && atual.bolsista
},true)
console.log(todosOsAlunosSaoBolsistas);

const todosBolsistas = (resultado,bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))


/**Desafio 2 */
const AlgumAlunoEhBolsistas = alunos.reduce(function (acumulador,atual) {
    return acumulador || atual.bolsista
},false)
console.log(AlgumAlunoEhBolsistas)

const algumBolsista = (resultado,bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))