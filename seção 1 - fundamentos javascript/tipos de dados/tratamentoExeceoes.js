function tratarErro(erro){
    throw new Error('...')
}

function nomeMaiusculo(obj){
    try{
        console.log(obj.nome.toUpperCase() + '!!!');
    }
    catch (e){
        tratarErro(e)
    }
}


const obj = { nome: 'Bruno' }
nomeMaiusculo(obj)

