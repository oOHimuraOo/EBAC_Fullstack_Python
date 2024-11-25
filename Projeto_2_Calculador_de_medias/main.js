const form = document.getElementById('formAtividade')

const imgAprovado = `<img src="./images/aprovado.png" alt="Emoji Celebrando"/>`
const imgReprovado = `<img src="./images/reprovado.png" alt="Emoji Decepcionado"/>`

const spanAprovado = `<span class="resultado aprovado">Aprovado </span>`
const spanReprovado = `<span class="resultado reprovado">Reprovado </span>`

const atividades = []
const notas = []

const notaMinima = parseFloat(prompt("Digite Aqui a nota minima:"))

var linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    addLinha()
    attTabela()
    attMediaFinal()
})

function addLinha(){
    const inputNomeAtivdade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')
    
    if (atividades.includes(inputNomeAtivdade.value)) {
        alert(`A Atividade: ${inputNomeAtivdade.value} já foi inserida na tabela`)
    }
    else{
        atividades.push(inputNomeAtivdade.value)
        notas.push(parseFloat(inputNotaAtividade.value))
    
        var linha = '<tr>'
        linha += `<td>${inputNomeAtivdade.value}</td>`
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
        linha +='</tr>'
    
        linhas += linha
    }
    

    inputNomeAtivdade.value = ''
    inputNotaAtividade.value = ''
}

function attTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function attMediaFinal(){
    const mediaFinal = calcMediaFinal()

    const mediaFinalValor = document.getElementById('media-final-valor')
    const mediaFinalResultado = document.getElementById('media-final-resultado')

    mediaFinalValor.innerHTML = mediaFinal.toFixed(2)
    mediaFinalResultado.innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado
}

function calcMediaFinal(){
    var somaNotas = 0

    for (let i = 0; i < notas.length; i++) {
        somaNotas += notas[i]
    }

    var media = somaNotas/notas.length
    return media
}