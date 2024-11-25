type Aluno = {
    nome: string;
    curso?: string[];
    idade: number;
}

const alunos:Aluno[] = [
    {
        nome: "carlos",
        curso: ["front", "ux/ui"],
        idade: 27
    },
    {
        nome: "ana",
        curso: ["front", "python"],
        idade: 27
    }
]

alunos.push({
    nome: "julia",
    curso: ["arquitetura"],
    idade:29
})

const novoAluno:Aluno = {
    nome: "lucas",
    idade: 32
}

function exibeAluno(aluno:Aluno):void{
    console.log(aluno.nome)
}