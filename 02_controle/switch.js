const exibirResultado = function (n1) { 
    switch (Math.floor(n1)) { //o floor arrendoda para baixo se fosse para arrendondar para sima seria Math.ceil
        case 10:
        case 9:
            console.log('Quadro de hora'); // se for 10 ou 9 exibe esse
            break;                          //se não colocar o break ele continua olhando as outras opções do case
        case 8: case 7:                      /* Sem os breaks ele continuariam executando todos os outros cases imprimindo tudo*/
            console.log('Aprovado!!'); //se for 8 ou 7 exibe esse
            break
        case 6: case 5: case 4: //Não pega: case 6,5,4: *Não pega tbm  se tentar por intervalo case 4-6:
            console.log('Recuperação');
        default:
            console.log('Nota Invalida'); //defalt entra aqui
            break
    }

}