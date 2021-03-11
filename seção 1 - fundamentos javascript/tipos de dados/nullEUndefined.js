const a = {name: 'Bruno'}
const b = a
b.name = 'Cibelle'
console.log(b, a)

/*
 * Se por um acaso 'b' for alterado, 'a' também será alterado. E assim, vice-versa.
 */

//Trabalhando com valor 'Undefined'
let valor
console.log(valor)


//Ausência de valor, porém foi definida, dizendo que não aloca na memória
valor = null 
console.log(valor)
//console.log(valor.toString()) ==> retorna o erro: Cannot read property 'toString' of null

const produto = {

}

console.log(produto.preco)
console.log(produto)

produto.preco = 4.50
console.log(produto)

produto.preco = undefined
console.log(!!produto.preco)
console.log(produto)

delete produto.preco

console.log(produto)

produto.preco = null //sem preco

console.log(!!produto.preco)
console.log(produto)
