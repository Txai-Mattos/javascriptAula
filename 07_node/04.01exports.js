console.log(this === module.exports);
console.log(exports === module.exports);

this.a = 1
exports.b=2
module.exports.c=3

exports = null              //mesmo aterando não muda a exportaçãp pois ele é somente uma variavel que refecencia  o verdadeiro objeto
console.log(module.exports);

exports = {
    nome:'teste'
}

console.log(module.exports);

module.exports  =  { public : true} // para mudar o que sera exportado teve ser feito assim