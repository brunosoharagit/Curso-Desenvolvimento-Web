//Estratégia 1 para geração de valores padrão
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(3, 3, 2)), soma1(0, 0, 0);

//Estratégia 2, 3 e 4 para geração de valores padrão
function soma2(a, b, c){
    a = a !== undefined ? a : 1 //(2)
    b = 1 in arguments ? b : 1 //(3)
    c = isNaN(c) ? 1 : c //(4)
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0));

//Estratégia de valor padrão do ES2015
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(), soma3(2), soma3(1, 2, 3), soma3(0, 0, 0))

//Exemplo real
function inseriuNome(nickname){
    nickname = nickname || `Desconhecido`
    return nickname
}

console.log(inseriuNome(), inseriuNome('Yotyan'), inseriuNome('Veloxbreno'));