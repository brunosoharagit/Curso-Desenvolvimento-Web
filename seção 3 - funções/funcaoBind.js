const pessoa = {
    cumprimentoDia: 'Bom dia!',

    falar(){
        console.log(this.cumprimentoDia)
    }
}

//como é visto, a FP retorna undefined
pessoa.falar()
const falar = pessoa.falar
falar()

//bind amarra o objeto da função "falar"
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()