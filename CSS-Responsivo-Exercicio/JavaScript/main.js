var modoEscuro = false
var modoLupa = false

$(document).ready(function(){
    inicializar_estilo()

    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout:5000,
        autoplayHoverPause:true
    });

    $('.botao-menu').click(function(){
        $('.menuSecundario nav').slideToggle()
    })
    
    $('header').hover(function(){
        if (verificarTamanhoTela()) {
            $('.menuPrincipal nav').slideToggle()
        }
    })    
    
    $('#modoLupa').click(function(){
        if (modoLupa == false) {
            modoLupa = true
            $('#liModoLupa').addClass('bordaAtiva')
            ativarHoverZoom(modoLupa)
        }
        else {
            modoLupa = false
            $('#liModoLupa').removeClass('bordaAtiva')
            ativarHoverZoom(modoLupa)
        }
    })

    $('#modoEscuro').click(function(){
        if (modoEscuro == false) {
            modoEscuro = true
            $('#liModoEscuro').addClass('bordaAtiva')
            ativarModoEscuro(modoEscuro)
        }
        else{
            modoEscuro = false
            $('#liModoEscuro').removeClass('bordaAtiva')
            ativarModoEscuro(modoEscuro)
        }
    })

    $('.sobre').click(function(){
        CarregarNovoMain()
    })

    $('.home').click(function(){
        carregarPaginaInicial()
    })


})

$(window).on('resize', function(){
    atualizarVisibilidadeMenu()
})

function inicializar_estilo(){
    var estilo_main = $('#estilo-principal')
    var estilo_escuro = $('#estilo-escuro')
    estilo_main.prop('disabled', false)
    estilo_escuro.prop('disabled', true)
}

function atualizarVisibilidadeMenu(){
    if (verificarTamanhoTela()){
        $('.menuPrincipal nav').hide()
    }
    else {
        $('.menuPrincipal nav').show()
    }
}

function verificarTamanhoTela(){
    var screenWidth = screen.width
    var windowWidth = window.innerWidth
    if (screenWidth > 1023) {
        if (windowWidth > 1023) {
            return true
        }
        else{
            return false
        }
    }
    return false
}

$('.botaoFlutuante > button').click(function(){
    $('html, body').animate({scrollTop : 0},800)
})

$(this).on('scroll', function(){
    var alturaMinima = 142
    var verificador = $(this).scrollTop() > alturaMinima
    if (!verificador){
        $('.botaoFlutuante').removeClass('reveladorDeBotaoFlutuante')
        $('.botaoFlutuante').addClass('escondedorDeBotaoFlutuante')
    }
    else{
        $('.botaoFlutuante').addClass('reveladorDeBotaoFlutuante')
        $('.botaoFlutuante').removeClass('escondedorDeBotaoFlutuante')
    }
})

function ativarHoverZoom(Ativo=false){
    if (Ativo == true){
        $('.produtosLista p').addClass('ativar-hover-produtos-lista')
        $('.preco').addClass('ativar-hover-preco')
        $('main > section p').addClass('ativar-hover-section-p')
    }
    else{
        $('.produtosLista p').removeClass('ativar-hover-produtos-lista')
        $('.preco').removeClass('ativar-hover-preco')
        $('main > section p').removeClass('ativar-hover-section-p')
    }
}

function ativarModoEscuro(Ativo=false){
    var estilo_main = $('#estilo-principal')
    var estilo_escuro = $('#estilo-escuro')
    if (Ativo){
        estilo_main.prop('disabled', true)
        estilo_escuro.prop('disabled', false)
    }
    else{
        estilo_main.prop('disabled', false)
        estilo_escuro.prop('disabled', true)
    }
}

function CarregarNovoMain(){
    $('main').load('./HTML/sobre.html main > section'), function(response, status, xhr){
        if (status == "error"){
            alert("ocorreu um erro ao carregar o conteudo. tente novamente mais tarde.")
        }
    }
    $('main').css("min-height", "0")
    $('main').css("padding-bottom", "50px")
}

function carregarPaginaInicial(){
    location.reload()
}
