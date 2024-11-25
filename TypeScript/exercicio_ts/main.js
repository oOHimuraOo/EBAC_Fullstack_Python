"use strict";
// A entrega deste exercício consiste em:
// • Utilizando o TypeScript e a tipagem escreva duas funções: uma função de multiplicação que deverá receber como argumentos dois números e retornar a multiplicação deles, e uma função de saudação que deverá receber um nome e retornar a concatenação “Olá “ + nome;
// • No repositório do curso crie uma branch chamada exercicio_ts e armaze o código TS escrito nesta branch, nos envie o link através da plataforma.
function multiplicarValors(valor, multiplicador) {
    return valor * multiplicador;
}
function saldacao(nome) {
    return `Olá ${nome}`;
}
console.log(multiplicarValors(35, 65));
console.log(saldacao("Felipe"));
