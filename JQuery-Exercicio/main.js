var qtdItensNaLista = []
var itensConcluidos = []
var contador = 0

$('form').on('submit', function(e){
    e.preventDefault()
    
    addTarefa()
    attContadorLista()

    contador += 1
    $('#nomeTarefa').val('')
})

$('body').on('click', 'a', function(e){
    e.preventDefault()

    var idAlvo = e.currentTarget.attributes[2].nodeValue
    

    attDataDeTermino(idAlvo)
    marcarItensConcluidos(idAlvo)
})

function addTarefa(){
    const nomeTarefa = $('#nomeTarefa').val()
    const dataCompleta = solicitarDataCompleta()

    var novoItemColuna1 = geradorDeItem(1, nomeTarefa, dataCompleta)
    var novoItemColuna2 = geradorDeItem(2, nomeTarefa, dataCompleta)
    var novoItemColuna3 = geradorDeItem(3, nomeTarefa, dataCompleta)

    novoItemColuna1.appendTo('#coluna1')
    novoItemColuna1.fadeIn(1000)

    novoItemColuna2.appendTo('#coluna2')
    novoItemColuna2.fadeIn(1000)

    novoItemColuna3.appendTo('#coluna3')
    novoItemColuna3.fadeIn(1000)
}

function geradorDeItem(coluna=0, nome, data){
    if (coluna <= 0 || coluna > 3){
        console.error("Nenhum valor aplicado. Coluna invalida.");
    }
    else if (coluna === 1){
        qtdItensNaLista.push(`${'tarefa'+contador}`)

        var novaLista = $('<ul style="display: none"></ul>')
        var novaLinha = $('<li></li>')
        
        $(`<a href="" title="Concluir Tarefa" id="${'tarefa'+contador}">${nome}</a>`).appendTo(novaLinha)
        novaLinha.appendTo(novaLista)
        
        return novaLista
    }
    else if (coluna === 2){
        var novaLista = $('<ul style="display: none"></ul>')
        var novaLinha = $('<li></li>')
        
        $(`<a href="" title="Concluir Tarefa" id="${'tarefa'+contador}">${data}</a>`).appendTo(novaLinha)
        novaLinha.appendTo(novaLista)

        return novaLista
    }
    else if (coluna === 3){
        var novaLista = $('<ul style="display: none"></ul>')
        var novaLinha = $('<li></li>')
        
        $(`<a href="" title="Concluir Tarefa" id="${'tarefa'+contador}">---</a>`).appendTo(novaLinha)
        novaLinha.appendTo(novaLista)
        return novaLista
    }
}

function attContadorLista(){
    $('tfoot #coluna3').html(`${itensConcluidos.length}/${qtdItensNaLista.length}`)
}

function solicitarDataCompleta(){
    const date = new Date()
    const dia = date.getDate()
    const mes = date.getMonth() + 1
    const ano = date.getFullYear()
    const hora = date.getHours()
    const minutos = date.getMinutes()
    const segundos = date.getSeconds()

    return `${dia}/${mes}/${ano} às ${hora}:${minutos}:${segundos}`
}

function attDataDeTermino(Index){
    $(`tbody #coluna3 li #${Index}`).html(solicitarDataCompleta())
    //const aColuna3 = document.querySelector(`tbody #coluna3 li #${Index}`)
    //aColuna3.innerHTML = solicitarDataCompleta()
}

function marcarItensConcluidos(Index){
    $(`[id="${Index}"]`).addClass('tarefaConcluida')
    
    if (!itensConcluidos.includes(Index)){
        itensConcluidos.push(Index)
        attContadorLista()
    }
}