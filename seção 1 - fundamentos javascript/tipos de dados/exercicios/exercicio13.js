function diasDaSemana(dia){
    switch(dia){
        case 1:
            return 'final de semana'

        case 7:
            return 'final de semana'

        case 2:
            return 'dia útil'

        case 3:
            return 'dia útil'

        case 4:
            return 'dia útil'

        case 5:
            return 'dia útil'

        case 6:
            return 'dia útil'

        default:
            return 'dia inválido'
    }
}

console.log(diasDaSemana(1))
console.log(diasDaSemana(7))
console.log(diasDaSemana(3))
console.log(diasDaSemana(8))