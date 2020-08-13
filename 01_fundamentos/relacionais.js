console.log('1','1'==1); //dois '=' compara valor
console.log('2','1'===1);//tres '=' estritamente igual compara o tipo tbm
console.log('3','1'!=1);//! = compara valor
console.log('4','1'!==1);//! = =  estritamente diferente, copmara valor e tipo

console.log('5',3 > 1);
console.log('6',3 >= 1);
console.log('7', 3 < 1);
console.log('8',3 <= 1);

const d1 = new Date(0)
const d2 = new Date(0)

console.log('9',d1 == d2); //falso pois irá comparar o endereço de memória
console.log('10',d1 === d2);//falso pois irá comparar o endereço de memória

console.log('11',d1.getTime() == d2.getTime());//verdadeiro pois esta comparado o valor
console.log('12',d1.getTime() === d2.getTime());//verdadeiro pois ambbos são do mesmo tipo

console.log('13',undefined == null);//verdadeiro 
console.log('13',undefined === null);//falso