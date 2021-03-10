let isActive = false
console.log(isActive)

isActive = true
console.log(isActive)

isActive = 1
console.log(isActive)

console.log()

console.log("Mostrando sentenças VERDADEIRAS....")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!'ser ou não ser: eis a questão...')
console.log(!!(isActive = true))
console.log(!!Infinity)

console.log()

console.log("Mostrando sentenças FALSAS....")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActive = false))

console.log()

console.log("Para finalizar....")
console.log(!!('' || null || 0 || ' '))
console.log(!!('' && null && 0 && ' '))

let nome = 'Josinaldo'
console.log(nome || 'Desconhecido')
console.log(nome && 'Desconhecido')