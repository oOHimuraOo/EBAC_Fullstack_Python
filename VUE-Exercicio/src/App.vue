<script setup>
import { reactive } from 'vue';

const estado = reactive({
  valor_a: 0,
  valor_b: 0,
  resultado: 0,
  operacao: "somar"
})

function somar(a,b) {
  const valores = verificarEConverter(a,b)
  estado.resultado = valores[0] + valores[1]
}

function multiplicar(a,b) {
  const valores = verificarEConverter(a,b)
  estado.resultado = valores[0] * valores[1]
}

function dividir(a,b) {
  const valores = verificarEConverter(a,b)
  estado.resultado = valores[0] / valores[1]
}

function subtrair(a,b) {
  const valores = verificarEConverter(a,b)
  estado.resultado = valores[0] - valores[1]
}

function verificarEConverter(a,b) {
  if (isNaN(a) || isNaN(b)) {
    alert('Ambos os valores precisam ser numeros.')
    return
  }
  var novo_a = parseFloat(a)
  var novo_b = parseFloat(b)

  return [novo_a, novo_b]
}

function recalcularOperacao(evento) {
  switch (evento) {
    case 'somar':
      estado.operacao = 'somar'
      somar(estado.valor_a, estado.valor_b)
      break
    case 'subtrair':
      estado.operacao = 'subtrair'
      subtrair(estado.valor_a, estado.valor_b)
      break
    case 'multiplicar':
      estado.operacao = 'multiplicar'
      multiplicar(estado.valor_a, estado.valor_b)
      break
    case 'dividir':
      estado.operacao = 'dividir'
      dividir(estado.valor_a, estado.valor_b)
      break
  }
}

</script>

<template>
  <div class="container">
    <h1>Calculadora</h1>
    <h2>Digite dois valores numericos e escolha a operação!</h2>
    <div class="calc">
      <input :value="estado.valor_a" type="number" @keyup="evento => estado.valor_a = evento.target.value" @change="recalcularOperacao(estado.operacao)">
      <select @change="evento => recalcularOperacao(evento.target.value)">
        <option value="somar">+</option>
        <option value="subtrair">-</option>
        <option value="multiplicar">X</option>
        <option value="dividir">/</option>
      </select>
      <input :value="estado.valor_b" type="number" @keyup="evento => estado.valor_b = evento.target.value" @change="recalcularOperacao(estado.operacao)" >
      <h2> = {{ estado.resultado }}</h2>
    </div>
  </div>
</template>

<style scoped>
  .container{
    margin: 0 auto;
    padding: 33px;
    max-width: 1024px;
  }

  h1,h2 {
    text-align: center;
  }

  .calc {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .calc > input {
    text-align: center;
  }
  .calc > select {
    margin-left: 12px;
    margin-right: 12px;
  }

  .calc > h2 {
    margin-left: 12px;
  }
</style>
