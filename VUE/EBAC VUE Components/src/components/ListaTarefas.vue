<script setup>
    const props = defineProps(['tarefas'])
</script>

<template>
    <ul class="list-group mt-4">
        <li class="list-group-item" v-for="(tarefa,index) in props.tarefas" :key="index">
            <input @change="evento => tarefa.concluido = evento.target.checked" :checked="tarefa.concluido" :id="tarefa.titulo" type="checkbox">
            <label :for="tarefa.titulo" class="ms-3" :class="{ done: tarefa.concluido}">
                {{ tarefa.titulo }}
            </label>
        </li>
    </ul>
</template>

<style scoped>
    .done {
        text-decoration: line-through;
    }
</style>
