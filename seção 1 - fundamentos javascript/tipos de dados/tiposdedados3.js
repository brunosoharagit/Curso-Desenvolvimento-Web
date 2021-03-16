let numero = 2
{
    let numero = 4
    console.log(`Dentro = ${numero}`)
}

console.log(`Fora = ${numero}`)

//Diferenças entre VAR e LET
/*
 ---> A palavra reservada 'let' possui acesso restrito, quando está inserido em um escopo de função.
 
 No exemplo acima, a saída de dados, dentro do escopo, se resultou em 4.
 Já na segunda saída de dados, foi resultado por número 2.

 • A saída de resultado influencia no caminho do escopo mais abrangente

 ---> No exemplo anterior (tiposdedados2.js), ambas as saídas se resultaram em 2, pois a palavra reservada 'var' não possui
      acesso restrito
 */