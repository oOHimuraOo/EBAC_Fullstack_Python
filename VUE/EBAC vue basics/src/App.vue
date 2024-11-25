<script setup lang="ts">
import { reactive, type InputHTMLAttributes } from 'vue';

const nome:string = "Felipe Cerqueira"
const meuObj: {nome:string, filmeFavorito:string} = {
  nome: "Felipe",
  filmeFavorito: "guerra infinita"
}

function dizOla(nome:string) {
  return `${nome} diz oi`
}

const enderecoDaImagem:string = "https://cdn.pixabay.com/photo/2024/01/15/11/36/batman-8510027_640.png"
const imagem:string = 'https://via.placeholder.com/500x500'
const botaoEstadesabilitado:boolean = false
const gostaDoSuperMan:boolean = true
const gostaDoBatman:boolean = false
const estaAutorizado:boolean = true

interface Iestado {
  contador: number
  email: string
  saldo: number
  transferindo: number
  nomes: string[]
  nomeTemp:string
}

const estado = reactive<Iestado>({
  contador: 0,
  email: '',
  saldo: 50000000,
  transferindo: 0,
  nomes: ['gian', "paulo", "luisa", "felipe"],
  nomeTemp: ''
})

function incrementar():void {
  estado.contador++
}

function decrementar():void {
  estado.contador--
}

function atualizarEmail(evento:KeyboardEvent):void {
  const target:HTMLInputElement = evento.target as HTMLInputElement
  estado.email = target.value
}

function atualizarValorASerTransferido(event:Event) :void {
  var target:HTMLInputElement = event.target as HTMLInputElement
  var novo_valor:number = parseFloat(target.value)
  estado.transferindo = novo_valor
}

function reduzirSaldo(valor:number) :void {
  estado.saldo -= valor
}

function verificarSePodeTransferir() :boolean {
  if (estado.saldo >= estado.transferindo) {
    return true
  }
  else {
    return false
  }
}

function finalizarTransferencia() :void {
  reduzirSaldo(estado.transferindo)
}

function implementarClasse() :string {
  var classe:string = verificarSePodeTransferir() ? "valido" : "invalido"
  return classe
}

function cadastrarNome() :void {
  estado.nomes.push(estado.nomeTemp)
}

function atualizarNomeTemp(event:Event) :void {
  var target:HTMLInputElement = event.target as HTMLInputElement
  var novo_valor:string = target.value
  estado.nomeTemp = novo_valor
}

</script>

<template>
  <h1>{{dizOla("paula")}}</h1>
  <img v-if="gostaDoBatman" :src="enderecoDaImagem" alt="">
  <img v-else-if="gostaDoSuperMan" :src="imagem" alt="">
  <h2 v-else>não curte super herois da dc</h2>

  <h1 v-if="estaAutorizado">bem vindo</h1>
  <h1 v-else>não esta autorizado</h1>
  <button :disabled="botaoEstadesabilitado"> enviar mensagem</button>
  <br>
  <hr>

  {{ estado.contador }}

  <button @click="incrementar" type="button"> + </button>
  <button @click="decrementar" type="button"> - </button>
  <br>
  <hr>

  {{ estado.email }}
  <br>
  <input type="email" @keyup="atualizarEmail">
  <br>
  <hr>

  saldo: {{ estado.saldo }} <br>
  transferindo: {{ estado.transferindo }} <br>
  simulador de saldo depois da transferencia {{ estado.saldo - estado.transferindo }} <br>
  <input :class="implementarClasse()" type="number" @change="atualizarValorASerTransferido">
  <button v-if="verificarSePodeTransferir()" type="button" @click="finalizarTransferencia()">transferir</button>
  <br>
  <hr>

  <ul>
    <li v-for="(nome,index) in estado.nomes" :key="index">
      {{ nome }}
    </li>
  </ul>
  <input type="text" placeholder="insira um novo nome" @keyup="atualizarNomeTemp">
  <button v-if="estado.nomeTemp" type="button" @click="cadastrarNome">cadastrar nome</button>
</template>

<style scoped>
  .valido {
    outline-color: green;
    border-color: green;
  }

  .invalido {
    outline-color: red;
    border-color: red;
  }

</style>
