function somar(n1, n2){
    return n1 + n2
}

function subtrair(n1, n2){
    return n1 - n2
}

function multiplicar(n1, n2){
    return n1 * n2
}

function dividir(n1, n2){
    return n1 / n2
}

function selecionarOperacao(numero1, numero2, opcao){

    switch(opcao){
        case 1:
            somar(numero1, numero2)
            break;

        case 2:
            subtrair(numero1, numero2)
            break;

        case 3:
            multiplicar(numero1, numero2)
            break;

        case 4:
            dividir(numero1, numero2)
            break;

        default:
            console.log("Operação inválida.")
    }
}

console.log(selecionarOperacao(1, 2, 3))