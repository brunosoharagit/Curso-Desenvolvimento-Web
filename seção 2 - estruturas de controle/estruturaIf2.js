//Estrutura IF/ELSE
function verificaAvaliacao(nota){
    if (nota >= 7){
        return `Aprovado!!`
    }

    else {
        return `Reprovado!!`
    }
}


console.log(verificaAvaliacao(7.1));
console.log(verificaAvaliacao(6.9));