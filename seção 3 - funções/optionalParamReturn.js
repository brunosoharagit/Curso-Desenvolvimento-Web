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