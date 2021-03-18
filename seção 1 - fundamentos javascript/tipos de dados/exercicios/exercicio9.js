/* exercício 9
 * 
 * • Alunos com nota abaixo de 40: serão reprovados
 * if (nota < 40){
 *      return 'Reprovado!!!'
 * }
 * 
 * • Critérios de arredondamento:
 * a) a nota for igual a 38
 * b) a nota for menor que 38
 * c) 
 */

function classificaAluno(nota) {
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`);
    } else {
        console.log(`Reprovado com nota ${notaCorrigida}`);
    }
}

function arredondar (nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

classificaAluno(100)
classificaAluno(15)
