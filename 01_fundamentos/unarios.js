let num1 = 1
let num2 = 2

num1++ //posfixada
console.log(num1);
--num1 //prefixada
console.log(num1);

console.log(++num1 == num2--)// vai da igual pois como foi prefixado na hora de comparar o num1 ja terar sido icrementado, enquando o num2 ainda não foi decremetado
console.log(num1 == num2)
