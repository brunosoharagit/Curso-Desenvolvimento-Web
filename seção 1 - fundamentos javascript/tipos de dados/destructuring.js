/* Parte 1
 * 
 *  
 */
const pessoa = {
    nome: 'Gerson',
    idade: 45,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 123,
        cep: '12345-670'
    }
}

const { nome, idade } = pessoa // Operador de desestruturação
console.log(`${nome} - ${idade} anos.`)

const { nome: n, idade: i} = pessoa
console.log(`${n} - ${i} anos.`)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(`${logradouro}, ${numero} - ${cep}`)