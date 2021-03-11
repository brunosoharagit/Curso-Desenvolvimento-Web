/*
Um projeto simples de recordação

---> Cálculo do Índide de Massa Corporal
¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
    • calculado da seguinte forma:
        IMC = peso / (altura)²
 */

const pesoBruno = 76.5
const alturaBruno = 1.73

function calcualrIMC(peso, altura){
    const IMC = peso / (Math.pow(altura, 2))

    if (IMC <= 18.5){
        console.log(`Peso: ${peso}kg. -- Altura: ${altura}m. -- Valor IMC: ${IMC.toFixed(2)} -- Resultado: abaixo do peso.`)
    }
    else if (IMC > 18.5 && IMC <= 24.9){
        console.log(`Peso: ${peso}kg. -- Altura: ${altura}m. -- Valor IMC: ${IMC.toFixed(2)} -- Resultado: peso normal.`)
    }
    else if (IMC > 25 && IMC <= 29.9){
        console.log(`Peso: ${peso}kg. -- Altura: ${altura}m. -- Valor IMC: ${IMC.toFixed(2)} -- Resultado: obesidade grau 1.`)
    }
    else if (IMC > 34 && IMC <= 39.9){
        console.log(`Peso: ${peso}kg. -- Altura: ${altura}m. -- Valor IMC: ${IMC.toFixed(2)} -- Resultado: obesidade grau 2.`)
    }
    else {
        console.log(`Peso: ${peso}kg. -- Altura: ${altura}m. -- Valor IMC: ${IMC.toFixed(2)} -- Resultado: obesidade grau 3.`)
    }
}

calcualrIMC(pesoBruno, alturaBruno)