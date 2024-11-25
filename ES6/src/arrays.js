const redesSociais = ['facebook', 'instagram', 'twitter']

for (var x = 0; x < redesSociais.length; x++) {
    console.log(`eu tenho perfil na rede social: ${redesSociais[x]}`)
}

redesSociais.forEach(function(rede, idx) {
    console.log(`indice: ${idx}, nome da rede social: ${rede}`)
})

const alunos = ['gustavo', 'julia', "paula", 'wagner']

var alunos2 = alunos.map(function(itemAtual){
    itemAtual = {
        nome: itemAtual,
        curso: 'ui/ux'
    }
    return itemAtual
})

console.log(alunos)
console.log(alunos2)

const numeros = [1,2,3,4,5,6]

const dobroDosNumeros = numeros.map(function(numeroAtual){
    numeroAtual = numeroAtual * 2
    return numeroAtual
})

console.log(numeros)
console.log(dobroDosNumeros)

const paula = alunos2.find(function(itematul) {
    return itematul.nome == 'paula'
})

console.log(paula)

const felipe = alunos2.find(function(itematul) {
    return itematul.nome == 'felipe'
})

console.log(felipe)

const idxPaula = alunos2.findIndex(function(itematul) {
    return itematul.nome == 'paula'
})

console.log(idxPaula)

const idxFelipe = alunos2.findIndex(function(itematul) {
    return itematul.nome == 'felipe'
})

console.log(idxFelipe)

const todosAlonsUiUx = alunos2.every(function(itemAtual){
    return itemAtual.curso === 'ui/ux'
})

console.log(`todos alunos são de ui/ux? ${todosAlonsUiUx}`)

const todosAlonsfront = alunos2.every(function(itemAtual){
    return itemAtual.curso === 'front'
})

console.log(`todos alunos são de frontend? ${todosAlonsfront}`)

alunos2.push({
    nome: 'felipe',
    curso: 'front'
})

const peloMenos1AlunoFront = alunos2.some(function(itemAtual) {
    return itemAtual.curso === 'front'
})

console.log(`pelo menos um aluno é de front end? ${peloMenos1AlunoFront}`)

const peloMenos1AlunoBack = alunos2.some(function(itemAtual) {
    return itemAtual.curso === 'back'
})

console.log(`pelo menos um aluno é de back end? ${peloMenos1AlunoBack}`)

const alunosFront = alunos2.filter(function(itemAtual){
    return itemAtual.curso === 'front'
})

console.log(alunosFront)

const nums = [10,20,30,10]

const soma = nums.reduce(function(acumulador, itemAtual){
    acumulador += itemAtual
    return acumulador
}, 0)

console.log(soma)