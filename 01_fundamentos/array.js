const valores = [7.7,8.9,6.3,9.2] // par de []cochetes é array

console.log(valores[0],valores[3])
console.log(valores[4])

valores[4] = 10
valores[10] =8
console.log(valores)

console.log(valores.length)

valores.push({id:3},false,null,'teste') //Insere no array
console.log(valores)

console.log(valores.pop()) //pop remove o ultimo item e retornar ele
delete valores[0]

console.log(valores)
console.log(typeof valores) //o array é um tipo objeto
