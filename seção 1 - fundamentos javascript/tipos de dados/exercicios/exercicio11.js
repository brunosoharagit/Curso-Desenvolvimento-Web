const anoBissexto = function(ano){
    if (ano % 4 === 0 || ano === 400){
        return true
    }
    else {
        return false
    }
}

console.log(anoBissexto(2002))