function soNotaBoa(nota){
    if (nota >= 7){
        return `Nota > ${nota}. \nAprovado!!`
    } 
    else {
        return `Nota > ${nota}. \nReprovado!!`
    }
}

console.log(soNotaBoa(6));
console.log(soNotaBoa(7.1));