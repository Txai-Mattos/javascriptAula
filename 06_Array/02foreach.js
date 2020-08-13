//Parte 1
const aprovados = ['Agatha','Aldo','Daniel','Raquel']

//usando função convencional e os dois parametros
aprovados.forEach(function (nome,indece,array) {      //Chama passadno nome e indice => passando função inline
    console.log(`${indece +1 }) ${nome}`)
    //console.log(array) o 3º e ultimo parametro passado pelo foreach é o proprio array
})

//foreach usando arrow function
aprovados.forEach(nome => console.log(nome))    //passando função inline

//Passando um função como parâmentro no foreach
const exibirAprovados = aprovado => console.log(aprovado)
 aprovados.forEach(exibirAprovados)

 
 /** SIMULANDO FOREACH */
 Array.prototype.forEach2 = function (callback) {
     for (let i = 0; i < this.length; i++) {
         callback(this[i],i,this )         
     }
 }

 const aprovados2 = ['item 1','item 2','item 2','item 3']
 aprovados2.forEach2(function (nome,indece,array) {      //Chama passadno nome e indice => passando função inline
    console.log(`${indece +1 }) ${nome}`)
    //console.log(array) o 3º e ultimo parametro passado pelo foreach é o proprio array
})