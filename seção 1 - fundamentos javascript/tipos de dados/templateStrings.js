const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

console.log(concatenacao)

const templateStrings = `Olá ${nome}!`

console.log(templateStrings)
console.log(`2 + 2 = ${2 + 2}`)

//Template Strings em função
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)