$(document).ready(function(){
    verificar_posicao_tela()
    
    const carousel = $("#car")
    var altura = $(window).height()
    var largura = $(window).width()
    
    carousel.empty()
    verificar_tamanho_tela(carousel, altura, largura)
})

$(this).on('scroll',function(){
    verificar_posicao_tela()
})

$(window).resize(function(){
    const carousel = $("#car")
    var altura = $(window).height()
    var largura = $(window).width()
    
    carousel.empty()
    verificar_tamanho_tela(carousel, altura, largura)
})

function verificar_posicao_tela(){
    var alturaMinima = 72
    var verificador = $(this).scrollTop() >= alturaMinima
    if (verificador){
        $(".corpo").addClass('add-padding-top')
    }
    else{
        $(".corpo").removeClass('add-padding-top')
    }
}

function verificar_tamanho_tela(objeto, altura, largura){
    var linha = '<div class="carousel-inner">'
    if (altura > largura){
        linha += '<div data-bs-interval="3500" class="carousel-item active">'
        linha += '<img src="Assets/Imgs/fish-8265114_1280.jpg" alt="praia no por do sol">'
        linha += '</div>'
        linha += '<div data-bs-interval="3500" class="carousel-item">'
        linha += '<img src="Assets/Imgs/leaves-8504392_1280.jpg" alt="tempestade de raios na cidade">'
        linha += '</div>'
        linha += '<div data-bs-interval="3500" class="carousel-item">'
        linha += '<img src="Assets/Imgs/mountains-6118187_1280.jpg" alt="flores contra a luz do sol">'
        linha += '</div>'
        linha += '<div data-bs-interval="3500" class="carousel-item">'
        linha += '<img src="Assets/Imgs/nature-8727795_1280.jpg" alt="mar aberto">'
        linha += '</div>'
        linha += '<button class="carousel-control-prev" type="button" data-bs-target="#car" data-bs-slide="prev">'
        linha += '<span class="carousel-control-prev-icon"></span>'
        linha += '</button>'
        linha += '<button class="carousel-control-next" type="button" data-bs-target="#car" data-bs-slide="next">'
        linha += '<span class="carousel-control-next-icon"></span>'
        linha += '</button>'
        linha += '<div class="carousel-indicators">'
        linha += '<button type="button" data-bs-target="#car" data-bs-slide-to="0" class="active"></button>'
        linha += '<button type="button" data-bs-target="#car" data-bs-slide-to="1"></button>'
        linha += '<button type="button" data-bs-target="#car" data-bs-slide-to="2"></button>'
        linha += '<button type="button" data-bs-target="#car" data-bs-slide-to="3"></button>'
        linha += '</div>'
        linha += '</div>'
    }
    else {
        linha += '<div data-bs-interval="3500" class="carousel-item active">'
        linha += '<img src="Assets/Imgs/beach-2580656_1280.jpg" alt="praia no por do sol">'
        linha += '</div>'
        linha += '<div data-bs-interval="3500" class="carousel-item">'
        linha += '<img src="Assets/Imgs/flash-2702168_1280.jpg" alt="tempestade de raios na cidade">'
        linha += '</div>'
        linha += '<div data-bs-interval="3500" class="carousel-item">'
        linha += '<img src="Assets/Imgs/sun-1758348_1280.jpg" alt="flores contra a luz do sol">'
        linha += '</div>'
        linha += '<div data-bs-interval="3500" class="carousel-item">'
        linha += '<img src="Assets/Imgs/sunrise-1590214_1280.jpg" alt="mar aberto">'
        linha += '</div>'
        linha += '<button class="carousel-control-prev" type="button" data-bs-target="#car" data-bs-slide="prev">'
        linha += '<span class="carousel-control-prev-icon"></span>'
        linha += '</button>'
        linha += '<button class="carousel-control-next" type="button" data-bs-target="#car" data-bs-slide="next">'
        linha += '<span class="carousel-control-next-icon"></span>'
        linha += '</button>'
        linha += '<div class="carousel-indicators">'
        linha += '<button type="button" data-bs-target="#car" data-bs-slide-to="0" class="active"></button>'
        linha += '<button type="button" data-bs-target="#car" data-bs-slide-to="1"></button>'
        linha += '<button type="button" data-bs-target="#car" data-bs-slide-to="2"></button>'
        linha += '<button type="button" data-bs-target="#car" data-bs-slide-to="3"></button>'
        linha += '</div>'
        linha += '</div>'
    }
    objeto.html(linha)
}
