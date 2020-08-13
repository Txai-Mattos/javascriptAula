function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTV50 = trabalho1 && trabalho2
    //const comprarTV32 = !!(trabalho1 ^ trabalho2) //bitwise xor(xor = or exclussívo)
    const comprarTV32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete //operador unário

    return {comprarSorvete,comprarTV50,comprarTV32,manterSaudavel} 
    // retornando objeto recen criado sem necessidade de informar a key do value que ele entendo nome da variavel como key e o valor dela como value
    
}

console.log(compras(true,true));
