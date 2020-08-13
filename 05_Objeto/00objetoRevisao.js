//coleção dinânica de pares chave/valor
const produto = new Object //quando instancia a função vira um objeto
//criando atributo dinâmicamente
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica' //usado normalmente para funções de introspecção
produto.preco = 220

console.log(produto);
//removendo atributo dinâmicamente
delete produto.preco
delete produto['marca do produto']
console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'raul',
        idade: 40,
        endereco: {
            lougradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'junior',
        idade: 19
    }, {
        nome: 'ana',
        idade: 42
    }],
    calcularValorSeguro: function () {
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['lougradouro']='Av Gigante'

console.log(carro);

delete carro.condutores //Ao deletar propriedade deleta tudo que está incluso nela
delete carro.proprietario.endereco
delete carro.calcularValorSeguro //deleta tbm a função

console.log(carro);
console.log(carro.condutores.nome); //DA ERRO ACESSAR UM PROPRIEDADE DE UM CAMPO UNDEFINED


