console.log(this===global); //false
console.log(this===module); //false

console.log(this===module.exports); //true
console.log(this=== exports); //true

function logThis() {
    console.log("dentro de uma função...");
    console.log(this===module.exports);//false
    console.log(this===exports);//false
    console.log(this===global);//true cuidado...o this dentro de uma função aponta pra global

    this.perigo = '...' //colocando no globla
}

logThis()

this.perigo ='...' //esta colocando no modulo.exports ou seja estra tornano publico atributo
