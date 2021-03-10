const escola = "Cod3r"

/*
    função .charAt = função que irá retornar o caractere alocado na posição
*/

console.log(escola.charAt(4)) // retornará o caractere 'r'

/*
    função .chatCodeAt = retorna o valor relacionado com a tabela ASCII
*/
console.log(escola.charCodeAt(4)) // retorna 114

/*
    função .indexOf = retorna o valor indicado 
*/
console.log(escola.indexOf('r')) // retorna 'r'

/* 
    função .substring = retorna a partir da posição indicada
*/
console.log(escola.substring(2)) // retorna 'd3r'
console.log(escola.substring(0, 2)) // retorna 'Co' ==> neste caso, irá retornar o início e o fim do índice

/*
    função .concat - concatena (une) outras strings
*/
console.log('Escola '.concat(escola).concat('!')) // retorna "Escola Cod3r!"

/*
    função .replace = altera um caractere de uma string por uma outra
*/
console.log(escola.replace(3, 'e')) // retorna 'Coder' 
console.log(escola.replace(/\w/g, 'e')) // retorna 'eeeee'

/*
    função .split = retorna um Array de elementos, de acordo com o separador (',' - '.' - ';')
*/
console.log('Danielzin09, Deolono, Biazinha09, Ploita, Veloxbreno'.split(','))


