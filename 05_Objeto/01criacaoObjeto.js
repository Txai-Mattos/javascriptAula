//usando a notação literal
const obj1 = {}
console.log(obj1)

//objeto em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2);

//funções construtoras
function Produto(nome,preco,desc) {
    this.nome = nome                //usando o this a propriedade fica publica() disponível para fora do obj)
    this.getPrecoComDesconto = () => {
        return preco * (1-desc)
    }
}
const p1 = new Produto('caneta',8.5,0.15)
const p2 = new Produto('lapis',10.5,0.2)
console.log(p1.getPrecoComDesconto(),p2.getPrecoComDesconto());

//função factory  --->factory é um padrão de proheto
function criarFuncionario(nome, salarioBase, faltas) {
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30-faltas)
        }
    }
}
const f1 = criarFuncionario('joão',7080,4)
const f2 = criarFuncionario('Maria',11400,1)

console.log(f1.getSalario(),f2.getSalario());

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha);

//Uma função famosa que retorna objeto...
const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info);


