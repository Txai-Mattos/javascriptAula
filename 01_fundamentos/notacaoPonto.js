function Obj(nome) {
    this.nome = nome
    this.exec = function () {
        console.log('Exec...')
    }
}

const Obj2 = new Obj('cadeira')
const Obj3 = new Obj('luva')

console.log(Obj2.nome);
Obj2.exec()