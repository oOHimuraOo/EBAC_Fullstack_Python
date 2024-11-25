"use strict";
const alunos = [
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
];
alunos.push({
    nome: "julia",
    curso: ["arquitetura"],
    idade: 29
});
const novoAluno = {
    nome: "lucas",
    idade: 32
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
