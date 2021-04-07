//Repetição FOR (início, fim, incremento)
let contador = 0

while(contador <= 10){
    console.log(`Contador = ${contador}`);
    contador++
}

for (let i = 0; i <= 10; i++){
    console.log(`i = ${i}`);
}

const notas = [1.5, 3.6, 4.75, 6.9, 8.9, 10]

for (i = 0; i < notas.length; i++){
    console.log(`Nota ${i} = ${notas[i]}`)
}