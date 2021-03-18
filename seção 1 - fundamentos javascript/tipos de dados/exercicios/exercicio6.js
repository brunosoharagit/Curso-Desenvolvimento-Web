function jurosSimples(capital, taxa, tempo){
    return `Juros Simples: R$${(capital * taxa * tempo).toFixed(2)}`
}

function jurosCompostos(capital, taxa, tempo){
    var variacao = 1 + taxa
    return `Juros Compostos: R$${(capital * Math.pow(variacao, tempo)).toFixed(2)}`
}

console.log(jurosSimples(2000, 0.20, 5))
console.log(jurosCompostos(2000, 0.20, 5))