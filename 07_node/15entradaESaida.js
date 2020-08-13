const anonimo = process.argv.indexOf('-a') !== -1 //Pegar paramentros diretamete do que foi colocado no terminal: "node 15entradaEsaida.js -a"
//console.log(anonimo);

if (anonimo) {
    process.stdout.write('fala anonimo! \n') //escrevendo direto no terminal, o stdout= standart OUT
    process.exit() //para finalizar o processo
} else {
    process.stdout.write('informe seu nome: ')
    process.stdin.on('data', data => {   //o on('data') é quando usuário dá entre, o stdin= standart IN
        const nome = data.toString().replace("\n", "")
        process.stdout.write(`tentativa 2: ${nome}!!!!`)
        process.exit() //para finalizar o processo
    })


}