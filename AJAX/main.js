$(document).ready(function(){
    atualizarInformacoes(true, 'oOHimuraOo')
    $('#novoUser').click(function(){
        atualizarInformacoes(true)
    })
})

function atualizarInformacoes(first = true, usuario_auto = '') {
    const elementoNome = $('#name')
    const elementoUsuario = $('#username')
    const elementoAvatar = $('#avatar')
    const elementoRepos = $('#repos')
    const elementoFollowers = $('#followers')
    const elementoFollowing = $('#following')
    const elementoLink = $('#link')
    
    var Usuario = usuario_auto

    if (usuario_auto === '') {
        if (!first) {
            alert("digite um usuario valido!")
        }
        while (Usuario === null || Usuario.length < 3) {
            Usuario = prompt('Digite aqui seu usuario: ')
        }
    }
    
    const url = `https://api.github.com/users/${Usuario}`

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao obter informações do usuário.')
            }
            return response.json()
        })
        .then(data=> {
            if (data.message) {
                alert(`Ocorreu um erro: ${data.message}`)
            } else {
                elementoNome.text(data.name)
                elementoUsuario.text(data.login)
                elementoAvatar.attr('src', data.avatar_url)
                elementoFollowers.text(data.followers)
                elementoFollowing.text(data.following)
                elementoRepos.text(data.public_repos)
                elementoLink.attr('href', data.html_url)
            }
        })
        .catch(error => {
            alert(`Carregando usuario padrão`)
            //console.log('Carreguei o usuario padrão')
            atualizarInformacoes(false, 'oOHimuraOo')
        })
    }