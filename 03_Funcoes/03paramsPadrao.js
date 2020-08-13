//estrategia 1 para gerar valor padrão
function soma1(a,b,c) {
    a = a || 1
    b = b || 1
    c = c || 1

    return a+b+c
}
console.log(soma1(3)); //o 2 e 3 parametros convertem para falso no bool e retona 1
console.log(soma1()); //o 2 e 3 parametros convertem para falso no bool e retona 1
console.log(soma1(0,0,0)); // aqui gera erro, por que o zero é convertido para falso e retorna 1

//estrategia 2,3 e 4 para gerar valor padrao
function soma2(a,b,c) {
    a = a !== undefined ? a : 1 //se usasse o ! = sem ser estritamente difenrente por tipo o null seria considerado undefined
    b = 1 in arguments ? b : 1 //verifica se tem um argumento na posição 2 caso não retorna 1 senão ele mesmo
    c = isNaN(c) ? 1 : c //como é para somar, validar se é um número e se não for retorno  padrão 1
return a+b+c
}
console.log(soma2(0,0,0)); // nesse caso não gera erro

//Valor padrão do ES2015 não precisa de testes
function soma3(a=1,b=1,c=1) {
    return a+b+c
}
console.log(soma3(0,0,0)); // nesse caso não gera erro