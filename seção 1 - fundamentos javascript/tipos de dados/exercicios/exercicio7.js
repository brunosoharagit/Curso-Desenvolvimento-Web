var solucao = []

function expressao(a, b, c){
    if (b > 0){
        return `${a}x² + ${b}x + ${c} = 0`
    } else {
        return `${a}x² ${b}x + ${c} = 0`
    }
}

function bhaskara(a, b, c){
    var d = (Math.pow(b, 2) - (4 * a * c))
    console.log(`Delta = ${d}`)

    if (d > 0){
        var x1 = ((-b) + Math.sqrt(d))/(2*a)
        var x2 = ((-b) - Math.sqrt(d))/(2*a)
        console.log('Delta positivo.')

        console.log(x1.toFixed(2), x2.toFixed(2))

        solucao.push(x1.toFixed(2))
        solucao.push(x2.toFixed(2))

        console.log(`soluções da equação = {${solucao}}`)
    }
    else {
        console.log('Delta negativo.')
    }
}

console.log(expressao(3, -5, 1))
bhaskara(3, 5, 1)
