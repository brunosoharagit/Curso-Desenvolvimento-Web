const aluno = {
    nome: 'Bruno', 
    datanasc: '21/08/1996',
    anoLetivo: '5º Semestre',
    disciplinas: ['DWEL5', 'SSRL5', 'MCPL4', 'ED2L5']
}

const { nome: n, datanasc: dn } = aluno
console.log(`${n} - Data de nascimento: ${dn}`);