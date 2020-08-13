for(let i=1;i<=10;i++){
    console.log('quem: '+i);
    
}

const notas = [1.6,2.8,3.9,5.2,4.1]
for (let i in notas){              // ele pega o index do array não o valor
    console.log(i,notas[i]);        //entra precisa usar esse index para achar o valor
    
}

const pessoa ={
    nome:'ana',
    sobremesa:'silva',
    idade:29,
    peso:64
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`);
    
}