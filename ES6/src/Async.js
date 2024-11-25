function funcaoMuitoPesada() {
    var execucoes = 0;
    for (var x = 0; x < 1000000000;x++) {
        execucoes++
    }
    return execucoes
}

console.log(new Date + 'inicio')
funcaoMuitoPesada()
console.log(new Date + 'fim')

const funcaoMuitoPesada2 = new Promise((resolve, reject) => {
    try {
        var execucoes = 0;
        for (var x = 0; x < 1000000000;x++) {
            execucoes++
        }
        resolve (execucoes)
    }catch(error) {
        reject('Deu erro na iteração')
    }
})

console.log(new Date + "inicio")

funcaoMuitoPesada2.then(resultado => console.log(new Date + resultado)).catch(erro => console.log(erro))

console.log(new Date + 'Executado apó a chamada')

async function execucaoPrincipal() {
    console.log(new Date + "inicio")

    await funcaoMuitoPesada2.then(resultado => console.log(new Date + resultado)).catch(erro => console.log(erro))

    console.log(new Date + 'Executado apó a chamada')
}

execucaoPrincipal()

async function execucaoPrincipal2() {
    console.log(new Date + "inicio")
    try {
        const resultado = await funcaoMuitoPesada2
        console.log(resultado)
    } catch(error) {
        console.log(error)
    }

    console.log(new Date + 'Executado apó a chamada')
}

execucaoPrincipal2()

const PromiseComParametros = (login, senha) => new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(`logado com o usuario: ${login}`)
    }, 3000)
})

async function execucaoPrincipal3() {
    console.log(new Date + "inicio")
    PromiseComParametros('felipe','oan2').then(resultado => console.log(new Date + resultado)).catch(erro => console.log(new Date + erro))
    try {
        const resultado = await funcaoMuitoPesada2
        console.log(resultado)
    } catch(error) {
        console.log(error)
    }

    console.log(new Date + 'Executado apó a chamada')
}

execucaoPrincipal3()