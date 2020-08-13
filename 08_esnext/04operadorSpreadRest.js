//operador ... rest(juntar)/spread(espalhar)
//usar rest como parametro de função

//usar spread com objeto
const funcionario = {nome: 'Maria', salario: 5550.56}
const clone = {ativo: true, ...funcionario} //copiando todos os atributos de funcionario para dentreo de clone
console.log(clone);

//usar spread com array
const arraya = ['carlos','joao','marcio']
const arrayb = ['maria',...arraya,'daniela']//copiando todos os atributos de arraya para dentro para aquela posição dentro de arrayb

console.log(arrayb);