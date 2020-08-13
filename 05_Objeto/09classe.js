//Classe 1
class Lancamento{
    constructor(nome = "Genérico",valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes,ano){       //função contrutora
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamento(...lancamentos){ //operador para aceitar parâmetros varíaveis
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario',45000)
const contaDeLuz = new Lancamento('Luz',-220)

const contas  = new CicloFinanceiro(6,2018)
contas.addLancamento(salario,contaDeLuz)
console.log(contas.sumario());

//Classe 2
class Avo {
    constructor(sobrenome){
        this.sobrenome =sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome,profissao = 'professor'){
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho);