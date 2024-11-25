const campoA = document.getElementById('campoA')
const campoB = document.getElementById('campoB')
const form = document.getElementById('form')
const resultadoTexto = document.getElementById('resultadoTexto')

resultadoTexto.style.display = 'none'

form.addEventListener('submit', function(e) {
    var mensagemResultado
    
    e.preventDefault()

    var valor_a = parseInt(campoA.value) 
    var valor_b = parseInt(campoB.value)

    var resultadoComparacao = comparadorValores(valor_a, valor_b)
    console.log(resultadoComparacao)

    if (resultadoComparacao === 1) {
        mensagemResultado = `O valor A informado foi: <b>${valor_a}</b>.<br/>O valor B informado foi: <b>${valor_b}</b>.<br/><br/>O valor <b>${Math.max(valor_a,valor_b)}</b> é maior que o <b>${Math.min(valor_a,valor_b)}</b>.<br/><br/> Os valores informados no Campo A e no Campo B estão invalidos.`
    }
    else if (resultadoComparacao === -1){
        mensagemResultado = `O valor A informado foi: <b>${valor_a}</b>.<br/>O valor B informado foi: <b>${valor_b}</b>.<br/><br/>O valor <b>${Math.max(valor_a,valor_b)}</b> é maior que o <b>${Math.min(valor_a,valor_b)}</b>.<br/><br/> Os valores informados no Campo A e no Campo B estão validos.`
    }
    else {
        mensagemResultado = `O valor A informado foi: <b>${valor_a}</b>.<br/>O valor B informado foi: <b>${valor_b}</b>.<br/><br/>Os valores são iguais.<br/><br/> Os valores informados no Campo A e no Campo B estão invalidos.`
    }

    resultadoTexto.innerHTML = mensagemResultado

    if (resultadoComparacao === -1) {
        resultadoTexto.classList.remove('fracasso')
        resultadoTexto.classList.add('sucesso')
    }
    else {
        resultadoTexto.classList.add('fracasso')
    }

    resultadoTexto.style.display = 'block'
})

function comparadorValores(val1,val2){
    if (val1 > val2) {
        return 1
    }
    else if (val1 === val2){
        return 0
    }
    else {
        return -1
    }
}