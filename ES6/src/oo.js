function Pokemon(nomeDoPokemon, tipoDoPokemon) {
    this.nome = nomeDoPokemon
    this.tipo = tipoDoPokemon
}

const Pikachu = new Pokemon('Pikachu', "Eletrico")
console.log(Pikachu)

class pkm {
    nome = ''
    tipo = ''
}

const raichu = new pkm()
raichu.nome = 'raichu'
raichu.tipo = 'eletrico'
console.log(raichu)

class pkm2 {
    constructor(args) {
        this.nome = args.nome
        this.tipo = args.tipo
    }
}

const pichu = new pkm2({"nome": 'pichu', "tipo":'eletrico'})
console.log(pichu)


class pkm3 {
    constructor(args) {
        this.nome = args.nome
        this.tipo = args.tipo
    }

    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com: ${nomeDoAtaque}`)
    }
}

const pichu2 = new pkm3({"nome": 'pichu', "tipo":'eletrico'})
pichu2.atacar("Choque do trovão")
