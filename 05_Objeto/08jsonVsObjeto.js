const obj = {a: 1, b: 2, c: 3, soma() {return a + b + c } }
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{a:1,b:2,c:3}")) //não é formato JSON valido
//console.log(JSON.parse("{'a':1,'b':2,'c':3}")) //não pode dentro do JSON os atributos estarem delimetados por aspas simples
console.log(JSON.parse('{"a":1,"b":2,"c":3}')) //formato valido com aspas duplas
console.log(JSON.parse('{"a":1.7,"b":"string","c":true,"d":{},"e":[]}')) //se for string tbm deve esta em aspas duplas