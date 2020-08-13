const escola = [{
    nome:'turma M1',
    alunos:[{
        nome:'Gustav',
        nota:6.3
    },{
        nome:'Ana',
        nota:5.4
    }] 
},{
    nome:'turma M2',
    alunos:[{
        nome:'Beka',
        nota:7.5
    },{
        nome:'robertp',
        nota:8.2
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)
const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

console.log([].concat([ 6.3, 5.4 ], [ 7.5, 8.2 ] ))

Array.prototype.flatMap = function (callback) { //ideia de trnaformar uma matriz em um unico array. //não é nativa do array ecms 5

    return Array.prototype.concat.apply([],this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2);