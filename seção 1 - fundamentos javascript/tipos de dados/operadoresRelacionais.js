console.log('01)', '1' == 1) // no primeiro momento está comparando o valor
console.log('02)', '1' === 1) // neste segundo momento, está sendo comparado o tipo de valor (string e int)
console.log('03)', '2' != 2)
console.log('04)', '2' !== 2)

console.log('05)', 3 > 2)
console.log('06)', 3 < 2)
console.log('07)', '3' == '2')

const date1 = new Date(0)
const date2 = new Date(0)
console.log('08)', date1 === date2)
console.log('09)', date1 == date2)
console.log('10)', date1.getTime() === date2.getTime())
console.log('11)', date1.getTime() == date2.getTime())
console.log('12)', undefined == null)
console.log('13)', undefined === null)

/*
 em via de dúvida, sempre utilizar o símbolo '===' (números estritamente iguais...) => para não confundir valores iguais, independente do tipo de dado.

*/