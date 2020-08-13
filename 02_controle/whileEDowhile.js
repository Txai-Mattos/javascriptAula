/*WHILE*/
function aleator(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = aleator(-1, 10)
    console.log(`Opção1 escolhida foi ${opcao}.`);

}

/*DO WHILE*/
let opcao2 = 0

do {
    opcao2 = aleator(-1, 10)
    console.log(`Opção2 escolhida foi ${opcao2}.`);
}
while (opcao2 != -1)


