<script setup>
  import { reactive } from 'vue';
  import Cabecario from './components/Cabecario.vue';
  import Formulario from './components/Formulario.vue';
  import ListaTarefas from './components/ListaTarefas.vue';
  

  const estado = reactive({
    filtro: 'todas',
    tarefaTemp: '',
    tarefas: [
      {
        titulo: 'Estudar ES6',
        concluido: false
      },
      {
        titulo: 'Estudar SASS',
        concluido: false
      },
      {
        titulo: 'Estudar Less',
        concluido: true
      },
      {
        titulo: 'Estudar VUE',
        concluido: false
      },
    ]
  })

  const getTarefasPendentes = () => {
    return estado.tarefas.filter(tarefa=>!tarefa.concluido)
  }

  const getTarefasFinalizadas = () => {
    return estado.tarefas.filter(tarefa=>tarefa.concluido)
  }

  const getTarefasFiltradas = () => {
    const { filtro } = estado

    switch (filtro) {
      case 'pendentes':
        return getTarefasPendentes()
      case 'finalizadas':
        return getTarefasFinalizadas()
      default:
        return estado.tarefas
    }
  }

  const cadastraTarefa = () => {
    const novaTarefa = {
      titulo: estado.tarefaTemp,
      finalizada: false,
    }
    estado.tarefas.push(novaTarefa)
    estado.tarefaTemp = ''
  }


</script>

<template>
  <div class="container">
    <Cabecario :tarefas-pendentes="getTarefasPendentes().length" />
    <Formulario :cadastrar-tarefa="cadastraTarefa"  :tarefa-temp="estado.tarefaTemp" :edita-tarefa-temp="evento => estado.tarefaTemp = evento.target.value" :trocar-filtro="evento => estado.filtro = evento.target.value" />
    <ListaTarefas :tarefas="getTarefasFiltradas()"/>
  </div>
</template>

