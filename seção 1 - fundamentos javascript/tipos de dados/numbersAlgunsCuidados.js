// Número N que divide por zero
console.log(7 / 0) //retorna Infinity

// Um número, que mesmo sendo uma string, que é dividido por um número
console.log("10.2" / 5) // retorna 2.04

//PERIGO!
// Um número que possui uma vírgula
console.log("10,2" / 5) // retorna NaN

//Multiplicação de palavras
console.log("Show!!!" * 2) // retorna NaN

//Soma de números de pontos flutuantes, gerando uma imprecisão
console.log(0.1 + 0.7) //retorna 0.79999...

//chamadas literais
console.log((10.3499999).toFixed(2))