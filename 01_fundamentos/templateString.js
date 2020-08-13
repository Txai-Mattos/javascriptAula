const nome = 'Rebeca'
const concatenacao = "Olá " + nome + '!'

const template = `
Olá
${nome}!`

console.log(concatenacao,template)

//Expressoes...
console.log(`1 + 2=${1+2}`)

const up = texto => texto.toUpperCase()


console.log(`Ei... ${up('cuidado')}!`)