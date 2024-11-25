function soma(a, b) {
    return parseFloat(a) + parseFloat(b)
}

function subtracao(a, b) {
    return parseFloat(a) - parseFloat(b)
}

function multiplicacao(a, b) {
    return parseFloat(a) * parseFloat(b)
}

function divisao(a, b) {
    return parseFloat(a) / parseFloat(b)
}

console.log(soma(2, 2))

module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao
}