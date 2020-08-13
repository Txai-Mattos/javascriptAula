//em node um arquivo é um modulo 
//ensinando a exportar
console.log(this);
this.ola = 'fala pessoal'                       //forma de exportar 1
exports.BemVindo = 'Bem vindo ao node!'         //forma de exportar 2
module.exports.ateLogo = 'Até o proximo exemplo' //forma de exportar 3
//console.log(this);
//as 3 formas alimentam o mesmo OBJ

//o sistema de modulo do node é commmuns JS