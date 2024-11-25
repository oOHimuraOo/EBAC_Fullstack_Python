<script setup lang="ts">
import HeaderNavigation from './components/HeaderNavigation.vue'
import { useRoute, RouterView } from 'vue-router'

const route = useRoute()
</script>

<template>
  <HeaderNavigation v-if="route.name === 'feed'" />
  <RouterView />
</template>

<style scoped></style>
