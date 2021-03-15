function calculaBonus(salarioBase, valorHora, horaTrabalhada){
    return "Salário (bônus incluído): R$" + (salarioBase + (valorHora.toFixed(2) * horaTrabalhada)).toFixed(2)
}

console.log(calculaBonus(2000, 19.90, 9))