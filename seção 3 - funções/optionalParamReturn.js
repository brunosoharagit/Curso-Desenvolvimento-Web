function area(altura, largura){
    const area = largura*altura
    if (area > 20){
        return `Área maior do que o permitido. Área inserida: ${area}m².`
    }
    else {
        return area
    }
}

console.log(area(3, 3))
console.log(area(3))
console.log(area())
console.log(area(3, 3, 3, 3, 3))
console.log(area(3, 30))