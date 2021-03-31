function escolherfruta(fruta) {
    switch (fruta) {
        case "Maçã":
            return "Não vendemos esta fruta."

        case "Kiwi":
            return "Estamos com escassez de kiwi."


        case "Melancia":
            return "Aqui está, são 3 reais o quilo."

    }
}

console.log(escolherfruta("Maçã"))