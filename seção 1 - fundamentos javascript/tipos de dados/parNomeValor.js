const saudacao = 'Salve'  // Contexto léxico 1 = contexto em que a variável foi definida fisicamente dentro do código

function exemplo(){
    const saudacao = 'Eae' // Contexto lexico 2
    return saudacao
}

//Objetos = grupos alinhados de pares nome/valor
const cliente = {
    nome: 'Bruno',
    idade: 24,
    cpf: '123.456.789-10',
    endereco: {
        logradouro: 'Rua Chuca',
        complemento: 123,
        bairro: 'Chuca',
        cidade: 'São Paulo'
    }
}

console.log(saudacao)
console.log(exemplo())

console.log(cliente)
console.log(cliente.endereco)