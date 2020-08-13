const alunos = [
    {nome:'Laise', nota:8.5},
    {nome:'Txai', nota :9.0}
]

//imperativo ==> passo a passo mais importante que o objetivo
let total1 = 0
for(let i = 0 ; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1/alunos.length)

//declarativo ==> objetivo mais importente que o passo a apasso
const getnota = aluno => aluno.nota
const soma = (total,atual) => total+atual
const total2 = alunos.map(getnota).reduce(soma)
console.log(total2/alunos.length)
