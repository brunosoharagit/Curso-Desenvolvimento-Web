function fatorial(numero){
    if (numero < 0){
        return `Número inválido!!`
    }
    else if (numero == 0 || numero == 1){
        return 1
    }
    else {
        var count = 1
        for (var x=numero; x>1; x--){
            count = count * x;
        }

        return count;
    }
}

console.log(fatorial(5))