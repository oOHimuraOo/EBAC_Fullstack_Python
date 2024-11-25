const form = document.getElementById('form-deposit')
const cotainerMensagem = document.getElementById('generalMessage')
const nomeBeneficiario = document.getElementById('nome-beneficiario')
const numeroConta = document.getElementById('numero-conta')
const numeroDeposito = document.getElementById('valor-deposito')
const mensagemDescricao = document.getElementById('descricao')
const nomeError = document.getElementById('nomeError')


var formValido = false

cotainerMensagem.style.display = 'none'
nomeError.style.display = 'none'

function validaNome(nomeCompleto) {
    const nomeArray = nomeCompleto.split(' ')
    return nomeArray.length >= 2
}

form.addEventListener('submit',function(e) {
    e.preventDefault()

    const mensagemSucesso = `Montante de: <b>${numeroDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroConta.value}</b>`
    const mensagemFalha = `Falha ao enviar o montante ao beneficiario. Confira as informações e tente novamente`
    

    formValido = validaNome(nomeBeneficiario.value)
    if (formValido) {
        
        if (numeroDeposito.value <= 0) {
            cotainerMensagem.innerHTML = mensagemFalha
            cotainerMensagem.classList.remove('successGeneral')
            cotainerMensagem.classList.add('errorGeneral')
            cotainerMensagem.style.display = 'block'
        }
        else {
            if (mensagemDescricao.value != '') {
                cotainerMensagem.innerHTML = mensagemSucesso + "<br/><br/>A mensagem de descrição foi: " + mensagemDescricao.value
            }
            else {
                cotainerMensagem.innerHTML = mensagemSucesso
            }
            
            cotainerMensagem.classList.remove('errorGeneral')
            cotainerMensagem.classList.add('successGeneral')
            cotainerMensagem.style.display = 'block'
    
            nomeBeneficiario.value = ''
            numeroConta.value = ''
            numeroDeposito.value = ''
            mensagemDescricao.value = ''
        }

    } else {

        cotainerMensagem.innerHTML = mensagemFalha
        cotainerMensagem.classList.remove('successGeneral')
        cotainerMensagem.classList.add('errorGeneral')
        cotainerMensagem.style.display = 'block'

    }

})

nomeBeneficiario.addEventListener('keyup', function(e) {
    formValido = validaNome(e.target.value)
    
    const mensagemError = `Por favor insira o nome do beneficiario completo.`

    if (!formValido) {
        nomeError.innerHTML = mensagemError
        nomeError.style.display = 'block'
        nomeError.classList.add('errorNameP')
        nomeBeneficiario.classList.add('errorName')
        
    }
    else {
        nomeError.remove('errorName')
        nomeBeneficiario.classList.remove('errorName')
    }
})