$(document).ready(function(){
    $('#imgs-carousel').slick({
        autoplay: true,
        autoplaySpeed: 5000,
    })

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle()
    })

    $('#telefone').mask('(00) 0 0000-0000',{
        placeholder: '(99) 9 9999-9999'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            interesse: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor, insira um nome.'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids() 
            if  (camposIncorretos) {
                alert(`existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato')
        const carroSelecionado = $(this).parent().find('h3').text()
        
        $('#interesse').val(carroSelecionado)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    }) 
})