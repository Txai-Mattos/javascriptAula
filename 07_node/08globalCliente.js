require("./08global") //feito para carregar o objeto que vc criou no globou, só precisa faze uma vez qeu é visto em todo o sistema

console.log(global.MinhaApp.saudacao()); //funciona com e sem a palavra global

//não consegue alterar por causa do freeze no objeto se não fosse isso alteraria
MinhaApp.nome = 'Eita'; console.log(MinhaApp.nome); 


