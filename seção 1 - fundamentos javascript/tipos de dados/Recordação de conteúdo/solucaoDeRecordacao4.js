function escolheFruta(opcaoFruta){
    arrayFrutas = 
       [{codigo: 0, fruta: "Maçã", preco: 3.50}, 
    
        {codigo: 1, fruta: "Banana", preco: 2.50},

        {codigo: 2, fruta: "Melancia", preco: 1.50}]

    switch(opcaoFruta){
        case 0:
            console.log(arrayFrutas[0].codigo)
            console.log(arrayFrutas[0].fruta)
            console.log(arrayFrutas[0].preco)
            break;

        case 1:
            console.log(arrayFrutas[1].codigo)
            console.log(arrayFrutas[1].fruta)
            console.log(arrayFrutas[1].preco)
            break;

        case 2:
            console.log(arrayFrutas[2].codigo)
            console.log(arrayFrutas[2].fruta)
            console.log(arrayFrutas[2].preco)
            break;

        default:
            console.log('Fruta inválida')
    }
}

escolheFruta(1)
escolheFruta(2)
escolheFruta(0)
escolheFruta(4)