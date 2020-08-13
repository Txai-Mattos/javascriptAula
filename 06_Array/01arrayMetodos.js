const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') //Adiciona um novo elemento na ultimo posição do array
console.log(pilotos)

pilotos.shift() //Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona um elemento na primeira posição do array
console.log(pilotos)

//Splice pode adiconar e remover elementos
//adicionar
pilotos.splice(2,0,'Bottas','Massa')
console.log(pilotos)
//remover
pilotos.splice(3,1) //removeu o da index 3
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) //Criar um novo array apartir da posição passada até o fim
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1,4) //Criar um novo array apartir da posição passada até 1 posição antes do segundo index passado, sem colocar o index 4 é exclusivo não inclusivo
console.log(algunsPilotos2)