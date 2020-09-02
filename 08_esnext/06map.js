

//semelhante ao obejto(estrutura chave valor) porém pode ter key variadas e não somente string vomo no objeto
const tecnologias = new Map()
tecnologias.set('react', {framework:false}) //forma de inserir o conjunto chave valor no map
tecnologias.set('angular', {framework:true})

console.log(tecnologias.react) // não encorntra achave assim
console.log(tecnologias.get('react').framework); //for de acessar as keys values

const chavesVariadas = new Map([
    [function(){},'função'],
    [{},'objeto'],
    [123,'numero']
])

chavesVariadas.forEach ((valor,chave) => {
    console.log(chave,valor);
})

console.log(chavesVariadas.has(123)) //função que diz se uma elemento esra ou não contido dentro do map
chavesVariadas.delete(123) //paga o elemento do map, retornando true se ele existia ou false se não
console.log(chavesVariadas.has(123)) //verofocando que não existe mais
console.log(chavesVariadas.size) //atributo que diz a quantidade de elementos

chavesVariadas.set(123,'a')
chavesVariadas.set(123,'b') //não não pode ter chave variadas o valor da chave 123 foi substituida por b
console.log(chavesVariadas);