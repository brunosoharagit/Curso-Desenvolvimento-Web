const funcao = []

for (var i = 0; i <= 10; i++){
    funcao.push(function(){
        console.log(i)
    })
}

funcao[0]() //11
funcao[2]() //11
funcao[4]() //11

/*
 * Retorna o mesmo valor para todos os índices
 *     
 */