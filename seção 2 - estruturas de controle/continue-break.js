const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (i in num){
    if (i == 5) {
        break
    }
    console.log(`Índice ${i} = ${num[i]}`)
}

console.log(" ");

for (j in num){
    if (j == 5){
        continue
    }
    console.log(`Índice ${j} = ${num[j]}`)
}