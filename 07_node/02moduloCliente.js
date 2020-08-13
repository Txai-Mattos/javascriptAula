//importando o que foi exportado para usa nesse arquivo.
const moduloA = require('./00moduloA') //usando caminho relativo, o "./" indica que esta na mesma pasta
const moduloB = require('./01moduloB')

console.log(moduloA.ola);
console.log(moduloA.BemVindo);
console.log(moduloA.ateLogo);
console.log(moduloA);

console.log(moduloB.bomdia);
console.log(moduloB.boaNoite());
console.log(moduloB);