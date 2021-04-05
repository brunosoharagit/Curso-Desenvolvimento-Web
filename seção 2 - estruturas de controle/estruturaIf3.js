//Estrutura IF/ELSE IF
function verificadorAvaliacao3(nota){
    if (nota >= 7){
        return `Aprovado!! \nMédia: ${nota}`
    }

    else{
        return `Reprovado!! \nMédia: ${nota}`
    }
}

console.log(verificadorAvaliacao3(7))
console.log(verificadorAvaliacao3(5))
console.log(verificadorAvaliacao3(3))