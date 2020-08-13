const escola = "ABCDEF"

console.log(escola.charAt(4)) //index começa de 0 
console.log(escola.charAt(6)) //se passar do tamanho do index retorna vazio, não dá erro

console.log(escola.charCodeAt(2))// retorna o valor do caracter na possição passada na tabela unicode 
console.log(escola.indexOf('E'))// o index da letra retorna -1 quando não encontra

console.log(escola.substring(3))
console.log(escola.substring(3,5))

console.log('escola '.concat(escola).concat("!"))
console.log('escola '+escola+"!")
console.log('escola '.replace("c",5))

console.log('Ana,Maria,Pedro'.split(','))