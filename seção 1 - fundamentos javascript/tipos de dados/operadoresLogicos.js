const p = true
const q = false


console.log('• tabela-verdade -- "E"')
console.log("p ^ p: ", p && p)
console.log("p ^ q: ", p && q)
console.log("q ^ p: ", q && p)
console.log("q ^ q: ", q && q)


console.log('\n• tabela-verdade -- "OU"')
console.log("p v p: ", p || p)
console.log("p v q: ", p || q)
console.log("q v p: ", q || p)
console.log("q v q: ", q || q)

console.log('\n• tabela-verdade -- "NEGAÇÃO"')
console.log("!p: ", !p)
console.log("!q: ", !q)