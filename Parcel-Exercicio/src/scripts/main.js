const modificadorData = "Oct 09, 2024 18:00:00"
const dataDoEvento = new Date(modificadorData)
const timeStampDoEvento = dataDoEvento.getTime()
const intervalo = 1000

AOS.init()

var count = 0
var chamadaDeTempo = setInterval(function() {
    if (count < 3) {
        count++
    } else {
        const agora = new Date()
        const timeStampAgora = agora.getTime()
        const tempoAteOEvento = timeStampDoEvento - timeStampAgora
        const diasDenominador = 1000 * 60 * 60 * 24
    
        const diasFaltando = Math.round(tempoAteOEvento / diasDenominador)
    
        const novaFrase = `Faltam ${diasFaltando} dias para o aniversário!!`
        $('#contador').text(novaFrase)
    
        if (diasFaltando == 0) {
            $('#contador').text("hoje é seu aniversári!")
            clearInterval(chamadaDeTempo)
        } else if (diasFaltando < 0) {
            $('#contador').text("Infelizmente agora só no proximo ano!")
            clearInterval(chamadaDeTempo)
        }
    }
}, intervalo)

$(document).ready(function(){
    $('#data').text(modificadorData)
    $('#imgs-carousel').slick({
        autoplay: true,
        autoplaySpeed: 5000,
    })
})

$('[data-verificador]').click(function(){
    var numero_do_convite = prompt('Digite aqui o numero do convite!')
    
    if (numero_do_convite === null || numero_do_convite === "") {
        return
    }

    if (validarConvite(numero_do_convite)) {
        alert('parabens sua presença foi confirmada!')
    } else {
        alert('infelismente não foi dessa vez...')
    }
})

function validarConvite(numeroDoConvite) {
    if (isNaN(numeroDoConvite)) {
        return false
    }
    const resto = numeroDoConvite % 2
    
    if (resto == 0) {
        return true
    } else {
        return false
    }
}