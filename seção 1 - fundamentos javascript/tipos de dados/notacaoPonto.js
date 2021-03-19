console.log(Math.pow(32, 2))

const obj1 = {}

obj1.nome = 'Lápis'
console.log(obj1.nome)

function Obj1(nome){
    this.nome = nome //utilizando o 'this', ela se torna pública
    this.exec = function(){
        console.log('Executado com sucesso!!')
    }
}

const obj2 = new Obj1('Borracha')
const obj3 = new Obj1('Caderno')

console.log(obj2.nome)
console.log(obj3.nome)
obj2.exec()