function exec2LadosCliente(a, b, c) {
    if (a == b && b == c) {
        return 'Equilátero'
    } else if (a == b || b == c || a == c) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

function exec3Expoente(base,expoente) {
    return Math.pow(base,expoente)
}

console.log(exec3Expoente(3,2));

//Exec05