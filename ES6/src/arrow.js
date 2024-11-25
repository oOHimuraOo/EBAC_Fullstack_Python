const minhaFuncao = () => "ola mundo"

console.log(minhaFuncao())

const retornaUmCarro = () => ({carro: "ka", ano:2020})

console.log(retornaUmCarro())

const carro = {
    velocidadeAtual: 40,
    acelarar: function() {
        this.velocidadeAtual += 10
    },
    frear: () => this.velocidade -= 10
}

carro.acelarar()
carro.frear()

console.log(carro.velocidadeAtual)
