/* Várias linguagens, ao realizar este processo, retornaria a mensagem de problema.
 * Porém em JavaScript, retornaria 'undefined'.
 * 
 * 
 *  console.log('a = ' + a)
    var a = 2
    console.log('a = ' + a)
 */

function teste(){
    console.log('a = ' + a)
    var a = 2
    console.log('a = ' + a)
}

teste()

function teste2(){
    console.log('b = ' + b)
    let b = 4
    console.log('b = ' + b)
}

teste2()