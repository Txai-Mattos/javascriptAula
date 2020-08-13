function tratarErro(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }

}

imprimirNomeGritado = obj => {
    try {
        console.log(obj.name.toUpperCase() + "!!");

    } catch (error) {
        tratarErro(error)
    } finally {
        console.log('final');

    }
}

const obj = {
    nome : 'carina'
}

imprimirNomeGritado(obj)