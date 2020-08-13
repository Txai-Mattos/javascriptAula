{
    {
        {
            var sera = 'foi!!!'
            console.log(sera)
        }
    }
}

console.log(sera) //mesmo com a varíavel declarada em  outro bloco conseguimos ver fora do bloco

function teste() {
    var local = 123
    console.log(local)
}

teste()
//console.log(local) //dá erro por que a varíavel foi declarada dentro a função e estamos tentenado acessar de fora

//toda varíavel var que não é declarado dentro de função fica como varível global dentro do objeto window

//window.sera = o node não tem a varíavel window se chama global
//isso para var fora de função fica global dentro de uma função fica no escopo dela

var numero = 1
{
    var numero = 2
    console.log("dentro= ", numero)
}
console.log("fora = ", numero)
