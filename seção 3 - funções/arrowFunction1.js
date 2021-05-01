let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {return 2 * a}

dobro = a => 2 * a //return 
console.log(dobro(Math.PI));

let ola = function() {return 'Olá!'}

ola = () => 'Olá'
//ou
ola = _ => 'Olá' //possui um parametro

console.log(ola());

let numeros = [1, 2, 3, 4, 5]

let triploMais100= numeros.map(item => item * 3 + 100)
console.log(triploMais100);

