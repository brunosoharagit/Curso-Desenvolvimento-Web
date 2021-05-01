function area(altura, largura){
    const area = largura*altura
    if (area > 20){
        return `Área maior do que a permitida. Área inserida: ${area}m².`
    }
    else {
        return area
    }
}

//Alguns exemplos de retorno
console.log(area(3, 3))
console.log(area(3))
console.log(area())
console.log(area(3, 6, 9, 12, 15))
console.log(area(3, 30))

function soma(){
    let soma = 0 
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1, 2))
console.log(Math.ceil(soma(1.1, 2.2, 3.3)));
console.log(soma(' - B','r','u','n','o'))