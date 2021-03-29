function compras(trab1, trab2){
    const comprarSorvete = trab1 || trab2
    const comprarTvDe50 = trab1 && trab2
    //const comprarTvde32 = !!(trab1 || trab2) //bitwise xor
    const comprarTvde32 = trab1 != trab2
    const manterSaudavel = !comprarSorvete

    return { comprarSorvete, comprarTvDe50, comprarTvde32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, false))