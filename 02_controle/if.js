function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('aprovado nota: '.concat(nota));

    }
}

soBoaNoticia(8)

function seForVerdadeiroEuFalo(valor) {
    if (valor)
        console.log('É verdadeiro... => ' + valor);

}

seForVerdadeiroEuFalo()
seForVerdadeiroEuFalo(null)
seForVerdadeiroEuFalo(undefined)
seForVerdadeiroEuFalo(NaN)
seForVerdadeiroEuFalo('')
seForVerdadeiroEuFalo(0)
seForVerdadeiroEuFalo(-1)
seForVerdadeiroEuFalo(' ')
seForVerdadeiroEuFalo('?')
seForVerdadeiroEuFalo([])
seForVerdadeiroEuFalo([1, 2])
seForVerdadeiroEuFalo({})

function teste(params) {
    if (params > 7); { //cuidado com o ""; com as estruturas de controle pois ele considerou o ; como a ação a ser feita quando passa no if.
        console.log(params);
    }
}

teste(6)
teste(8)

const imprimiResultado = function (nota) {
    if (nota >= 7) {
        console.log('aprovado!!');

    } else {
        console.log('reprovado');

    }
}

imprimiResultado('epaa!!!!')//CUIDADO COMO FRACAMENTE TIPADA ELE COMPAROU O EPA E DEU REPROVADO

Number.prototype.entre = function (n1, n2) { //colocando a função no tipo number
    return this >= n1 && this <= n2
}

const exibirResultado = function (n1) {
    if (n1.entre(9, 10)) {
        console.log('Quadro e hora');

    } else if (n1.entre(7, 8.99)) {
        console.log('aprovador');

    } else if (n1.entre(4, 6.99)) {
        console.log('repovado');

    } else {
        console.log('Num invalido');

    }
}

exibirResultado(7)