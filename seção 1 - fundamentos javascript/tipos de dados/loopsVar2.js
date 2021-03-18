const funcao = []

for (var i = 0; i <= 10; i++){
    funcao.push(function(){
        console.log(i)
    })
}

funcao[0]()
funcao[2]()
funcao[4]()

/*
 * Retorna o mesmo valor para todos os índices
 *     
 */