/**
 * Exemplo 1
 */
const fabricantes = ["Mercedes","Audio","BMW"]

function imprimir(nome,indice) {
    console.log(`${indice+1}. ${nome}`);
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

//Callback é passar uma função que será chamada quando um evento acontecer, nesse caso o evento é o loop
//ai quando ele encontra um novo elemento disparar a função callback.

/**
 * Exemplo 2
 */
const notas = [4.6,7.8,5.3,5.8,9.0,10.0,7.4]

//Sem Callback
let notasbaixas = []

for (const i in notas) {
    if (notas[i] < 7  ) {
        notasbaixas.push(notas[i])   
    }
}
console.log(notasbaixas);

let notasbaixas2 = notas.filter(nota => nota < 7) // coma função arrow anonima feita na hora
console.log(notasbaixas2);

funcaoMenorQue7 = nota => nota < 7
notasbaixas2 = notas.filter(funcaoMenorQue7) //usando uma função ja existente
console.log(notasbaixas2);

/**
 * Exemplo 3 //callback no browser copiar o codigo no browser e testar
 */
document.getElementsByTagName('body')[0].onclick = e =>console.log("Um evento ocorreu");
