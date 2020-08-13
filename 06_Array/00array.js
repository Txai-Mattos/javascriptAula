/**********array*****************/
//Objeto indexado a partir do 0
console.log(typeof Array,typeof new Array,typeof [])
//array literal ou instânciado é um objeto, e o Array mesmo é uma função

let aprovado = new Array('Bia','Carlos','Ana')
console.log(aprovado)

aprovado = ['Bia', 'Carlos', 'Ana']
console.log(aprovado[0])
console.log(aprovado[3]) //não esta no arry traz undefined

aprovado[3] = 'Paulo' //Mais usado para substituir os dados, porém pode ser usado para adicionar um novo
aprovado.push('Abia') //adiciona um novo registro no fim do array
console.log(aprovado.length)

aprovado[9] = 'Rafael'
console.log(aprovado.length)
console.log(aprovado[8]===undefined,aprovado)

aprovado.sort() //altera o array original, ordenando
console.log(aprovado)

delete aprovado[1] //remove o elemento do indice 1

aprovado = ['Bia','Carlos', 'Ana']
aprovado.splice(1,1) //remove 1 item no index 1  -> altera o proprio array
aprovado.splice(1,2,'Elemento1','Elemento2') //remove 2 item apartir do index 1  e adiciona dois novos elementos aprtir da posição
aprovado.splice(1,0,'Elemento3','Elemento4') // só adiciona, porque o paramentro de remover é zero
console.log(aprovado)



/**SIMULANDO UM ARRAY COM OBJETO */
const quaseArray = {0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(quaseArray)
Object.defineProperty(quaseArray,'toString',{
    value: function () { return Object.values(this)},
    enumerable: false
})
console.log(quaseArray[0])
console.log(quaseArray.toString())