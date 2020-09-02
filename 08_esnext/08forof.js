//novo tipo de laço similar ao for in, 
//for in interage emcima de index
//for off em cima de index

for (const letra of 'codigo') { //exemplo for of
    console.log(letra);
}

const assuntoEcmas = ['Map', 'Set', 'Promise']

for (const i in assuntoEcmas) { //o for in obten o index
    console.log(i)
}

for (const i of assuntoEcmas) { //o for of obten os valores
    console.log(i)
}

const AssuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promisse', { abordado: false }]]
)

for (const assunto of AssuntosMap) {
    console.log(assunto);
}
for (const Chave of AssuntosMap.keys()) {
    console.log(Chave);
}
for (const Valor of AssuntosMap.values()) {
    console.log(Valor);
}

for (const [ch,vl] of AssuntosMap.entries()) { //fazendo destruncrion do par chave valor retornado
    console.log(ch,vl);
}

const s = new Set(['1','2','3'])

for (const val of s) {
    console.log(val);
}