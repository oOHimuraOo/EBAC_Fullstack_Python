function somar(a, b) {
    return a+b
}

console.log(somar(10,20))

function somar2() {
    var soma = 0
    for (var x = 0; x < arguments.length; x++) {
        soma += arguments[x]
    }
    return soma
}

console.log(somar2(1,2,3,4,5,6,7,8,9,10))

function somar3(...numeros) {
    return numeros.reduce((total,atual) => {
        total += atual
        return total
    }, 0)
}

console.log(somar3(1,2,3,4,5,6,7,8,9,10))


const numeros = [1, 2, 3, 4]
console.log(...numeros)

const numerinhos = [1,2,3,4,5,6,7,8,9,10]
const letras = ["a","b","c","d","e","f","g","h","j","k","l","m","n","o","p","q","r","s","t","u","v","x","z"]

const numeros_e_letras = [...numerinhos, ...letras]
console.log(numeros_e_letras)

const carroDaJulia = {
    modelo:'gol',
    marca:"vw",
    motor: 1.6
}

const carroDaAna = {
    ...carroDaJulia, 
    motor: 1.8
}

console.log(carroDaJulia)
console.log(carroDaAna)

const {motor:MotorAna} = carroDaAna
const {motor:MotorJulia} = carroDaJulia

console.log(MotorAna)
console.log(MotorJulia)

