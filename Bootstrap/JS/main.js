$(document).ready(function(){
    $("#buttonSubmit").click(function(e){
        if (!verifyInfos()){
            addError()
            return
        }
        $('#inputName').val("")
        $('#inputEmail').val("")
        $('#inputNumber').val("")
        console.log("a")
    })

    $('#inputName').keyup(function(){
        if (!verifyInfos()){
            addError()
        }
        else {
            const corpoSite = $('#armazenador-de-alerta')
            corpoSite.empty()
        }
    })

    $('#inputEmail').keyup(function(){
        if (!verifyInfos()){
            addError()
        }
        else {
            const corpoSite = $('#armazenador-de-alerta')
            corpoSite.empty()
        }
    })

    $('#inputNumber').keyup(function(e){
        var objeto = $('#inputNumber')
        var apagando = e.originalEvent.code === 'Backspace' ? true : false

        telefoneUnificator(objeto, apagando)

        if (!verifyInfos()){
            addError()
        }
        else {
            const corpoSite = $('#armazenador-de-alerta')
            corpoSite.empty()
        }
    })
})

function verifyInfos(){
    var inputText = $("#inputName").val()
    var inputEmail = $("#inputEmail").val()
    var inputNumber = $("#inputNumber").val()
    if (!inputText|| !inputNumber|| !inputEmail){
        return false
    }
    return true
}

function addError(){
    const inputText = $("#inputName").val()
    const inputEmail = $("#inputEmail").val()
    const inputNumber = $("#inputNumber").val()
    const corpoSite = $('#armazenador-de-alerta')
    var arrayDeSlotsNaoPreenchidos = []
    
    corpoSite.empty()

    if (!inputText) {
        arrayDeSlotsNaoPreenchidos.push("Nome")
    }
    if (!inputEmail) {
        arrayDeSlotsNaoPreenchidos.push("Email")
    }
    if (!inputNumber) {
        arrayDeSlotsNaoPreenchidos.push("Telefone")
    }

    if (arrayDeSlotsNaoPreenchidos.length > 1){
        var linha = '<div class="alert alert-danger alert-dismissible">'
        linha += '<button class="btn-close" data-bs-dismiss="alert"></button>'
        linha += '<h5 id="errorMsg">'
        linha += 'Erro ao enviar! Esta faltando o(s) campo(s) obrigatorio(s):'
        for (var i = 0; i < arrayDeSlotsNaoPreenchidos.length; i++){
            linha += arrayDeSlotsNaoPreenchidos[i]
            if (i == arrayDeSlotsNaoPreenchidos.length -1){
                linha += "."
            }
            else (
                linha += ', '
            )
        }
        linha += '</h5>'
        linha += '</div>'
        const corpoSite = $('#armazenador-de-alerta')
        corpoSite.html(linha)
    }
    else if (arrayDeSlotsNaoPreenchidos.length == 1){
        var linha = '<div class="alert alert-danger alert-dismissible">'
        linha += '<button class="btn-close" data-bs-dismiss="alert"></button>'
        linha += '<h5 id="errorMsg">'
        linha += `Erro ao enviar! Esta faltando o(s) campo(s) obrigatorio(s): ${arrayDeSlotsNaoPreenchidos[0]}`
        linha += '</h5>'
        linha += '</div>'

        
        corpoSite.html(linha)
    }
}

function telefoneUnificator(objeto, bool){
    var valor = objeto.val()

    valor = valor.replace(/\D/g, '')
    
    if (bool){
        if (valor.length > 3){
            telefoneUnificator(objeto, false)
            return
        }
        else{
            return
        }
    }
    
    if (valor.length < 8 ){
        valor = valor.substring(0,3) + ' ' + valor.substring(3)
    } else if (valor.length === 8){
        valor = valor.substring(0,4) + '-' + valor.substring(4,8)
    } else if (valor.length === 9){
        valor = valor.substring(0,1) + ' ' + valor.substring(1,5) + '-' + valor.substring(5,9)
    } else if (valor.length === 10){
        valor = '(' + valor.substring(0,2) + ') ' + valor.substring(2,6) + '-' + valor.substring(6,10)
    } else if (valor.length === 11){
        if (valor[0] == 0){
            if (valor[1] != 0){
                if (valor[2] == 0) {
                    if (valor[3] == 0){
                        valor = valor.substring(0,4) + ' ' + valor.substring(4,7) + ' ' + valor.substring(7,11)
                    }
                    else {
                        valor = '(' + valor.substring(0,3) + ') ' + valor.substring(3,7) + '-' + valor.substring(7,11)
                    }
                }
            }
        }
        else {
            if (valor[2] == 9){
                valor = '(' + valor.substring(0,2) + ') ' + valor.substring(2,3) + ' ' + valor.substring(3,7) + '-' + valor.substring(7,11)
            }
            else {
                valor = '(' + valor.substring(0,2) + ') ' + valor.substring(2,6) + '-' + valor.substring(6,10) + ' R.: ' + valor.substring(10,11)
            }
        }
    } else if (valor.length === 12){
        if (valor[0] == 0){
            if (valor[3] == 9){
                valor = '(' + valor.substring(0,3) + ') ' + valor.substring(3,4) + ' ' + valor.substring(4,8) + '-' + valor.substring(8,12)
            }
            else {
                valor = '(' + valor.substring(0,3) + ') ' + valor.substring(3,7) + '-' + valor.substring(7,11) + ' R.: ' + valor.substring(11,12)
            }
        }
        else {
            valor = '(' + valor.substring(0,2) + ') ' + valor.substring(2,6) + '-' + valor.substring(6,10) + ' R.: ' + valor.substring(10,12)
        }
    } else if (valor.length === 13){
        if (valor[0] == 0){
            valor = '(' + valor.substring(0,3) + ') ' + valor.substring(3,7) + '-' + valor.substring(7,11) + ' R.: ' + valor.substring(11,13)
        }
        else {
            valor = '(' + valor.substring(0,2) + ') ' + valor.substring(2,6) + '-' + valor.substring(6,10) + ' R.: ' + valor.substring(10,13)
        }
    } else if (valor.length >= 14){
        valor = '(' + valor.substring(0,3) + ') ' + valor.substring(3,7) + '-' + valor.substring(7,11) + ' R.: ' + valor.substring(11,14)
    }

    objeto.val(valor)
}