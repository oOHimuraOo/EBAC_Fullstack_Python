<script setup lang="ts">
import LoginComponent from '@/components/LoginComponent.vue'
</script>

<template>
  <div class="container">
    <div class="login">
      <div class="border_creator">
        <LoginComponent />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/Variaveis.scss';

.border_creator {
  border: 2px solid Variaveis.$corTerciaria;
  border-radius: 8px;
  padding: 16px;
  background-color: Variaveis.$corDeFundoQuaternaria;
}

.login {
  max-width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0 auto;
}

</style>
