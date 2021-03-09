const weight = 89.0
const height = 1.99
const brunosWeight = Number("76.0")
const dereksWeight = Number("75.0")

console.log(weight, height)
console.log("Is Integer? >> Answer: " + Number.isInteger(weight))
console.log("Is Integer? >> Answer: " + Number.isInteger(height))
console.log("Is Integer? >> Answer: " + Number.isInteger(dereksWeight))

const notaP1 = 9.8
const notaP2 = 8.0
const peso1 = 8
const peso2 = 2

console.log("\n\n")

const mediaAnual = ((notaP1 * peso1) + (notaP2 * peso2))/(peso1 + peso2)
console.log("Média anual = " + mediaAnual.toFixed(2))
console.log("Média anual (com string) = " + mediaAnual.toFixed(2).toString())
console.log("Média em forma binária = " + mediaAnual.toString(2))
console.log("Tipo de dado de 'mediaAnual': " + typeof mediaAnual)
console.log("Tipo de dado de 'Number': " + typeof Number)