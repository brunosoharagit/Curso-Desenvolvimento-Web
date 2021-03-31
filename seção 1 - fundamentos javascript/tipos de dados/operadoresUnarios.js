let num1 = 1
let num2 = 2

num1++ //infixo
console.log(num1)

--num1 //prefixo
console.log(num1)

console.log(++num1 === num2--) // executado antes da comparação - executado depois da comparação
console.log(num1 === num2)