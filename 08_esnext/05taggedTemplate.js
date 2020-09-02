//tagged templates - processa as templates string dentro de uma função
function tag(partes,...valores) {
    console.log(partes);    //guarda as partes da string
    console.log(valores);   //guarda os valores das variaveus passadas
    return "Outra string"
}

const aluno = 'Gui'
const situacao = 'Aptrovado'

console.log(tag `${aluno} está ${situacao}.`) //chamando a tagged template


//Uso de template string
function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor,index) => {
        valor = isNaN(valor) ?  valor : `R$ ${valor.toFixed(2)}`
        resultado.push(partes[index],valor)
    })
return resultado.join("")
}

const preco = 29.99
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`);

