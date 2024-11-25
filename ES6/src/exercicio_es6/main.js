class aluno {
    constructor(args) {
        if (!args){
            throw new Error('Precisa existir argumentos')
        }

        this.Nome = args.Nome
        this.Nota = args.Nota
    }
}

function gerar_alunos(qtd) {
    var lista_de_alunos = []
    if (typeof qtd !== 'number' || qtd < 1) {
        throw new Error('A quantidade precisa ser um NUMBER valido e Maior ou igual a 1')
    }

    for (var x = 0; x < qtd; x++){
        var nome_do_aluno = `aluno ${x}`
        var nota_do_aluno = Math.floor(Math.random() * 10)
        var estudante = new aluno({'Nome':nome_do_aluno, 'Nota':nota_do_aluno})
        lista_de_alunos.push(estudante)
    }
    return lista_de_alunos
}

const media = 6
const lista_de_alunos = gerar_alunos(5)
console.log(lista_de_alunos)

function verificador_de_alunos_acima_da_media(lista_de_alunos, nota_media = 6) {
    if (!Array.isArray(lista_de_alunos)) {
        throw new Error("A lista de alunos precisa ser um ARRAY valido.");
    }

    if (!lista_de_alunos.some(aluno=>aluno.Nota >= nota_media)) {
        console.log(`nenhum aluno teve nota igual ou maior que ${nota_media}`);
        return []
    }

    var nova_lista_de_alunos = lista_de_alunos.filter(aluno => aluno.Nota >= nota_media)

    return nova_lista_de_alunos
}

const alunos_acima_da_media = verificador_de_alunos_acima_da_media(lista_de_alunos, media)

console.log(alunos_acima_da_media)
console.log(`${lista_de_alunos.length} pessoas fizeram o curso. Apenas ${alunos_acima_da_media.length} tiveram uma media maior ou igual a ${media}.`)