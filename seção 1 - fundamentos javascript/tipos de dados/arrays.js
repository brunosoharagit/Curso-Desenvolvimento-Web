const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(numeros[0] + ' - ' + numeros[2] + ' - ' + numeros[10])

numeros[10] = 10
console.log(numeros[10])

console.log("Quantidade: " + numeros.length)

const listaProdutos = ['Headset Corsair', 'Monitor AOC 24 polegadas 144hz', 'Teclado Razer', 'Mouse Razer Kraken', 'CPU']

console.log("Antes: " + listaProdutos)
listaProdutos.push('Suporte headset')
console.log("Depois: " + listaProdutos)