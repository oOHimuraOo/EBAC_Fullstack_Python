<script setup lang="ts">
import LoginComponent from '@/components/LoginComponent.vue';
import { onMounted, reactive } from 'vue';
import logo from '@/assets/imgs/icons/bird-svgrepo-com.svg';
import { getAllUsers } from '@/utils/fetcher/axios';

const estado = reactive({
  users: 0,
});

async function calcularUsuariosConectados() {
  try {
    const users = await getAllUsers();
    estado.users = users.length;
  } catch (error) {
    console.error('Erro ao calcular usuários conectados', error);
  }
}

onMounted(() => {
  calcularUsuariosConectados();
});
</script>

<template>
  <div class="container">
    <div class="centralizer">
      <div class="logo_titulo">
        <img :src="logo" alt="logo-grande" />
        <h1>Tweeter clone</h1>
        <h2>Faça parte da comunidade!</h2>
        <span> Contamos com mais de {{ estado.users }} usuários logados! </span>
      </div>
      <div class="login">
        <LoginComponent />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/Variaveis.scss';

.centralizer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.logo_titulo {
  max-width: 25vw;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 350px;
    max-height: 350px;
  }

  h1 {
    font-size: Variaveis.$fontSizeG;
    font-weight: bold;
    margin: 8px 0;
    color: Variaveis.$corSecundaria;
  }

  h2 {
    font-size: Variaveis.$fontSizeM;
    font-weight: bold;
    margin-bottom: 4px;
  }

  span {
    font-size: Variaveis.$fontSizeP;
    font-weight: normal;
    color: Variaveis.$corTerciaria;
  }
}

.login {
  border: 2px solid Variaveis.$corTerciaria;
  padding: 16px;
  border-radius: 8px;
  background-color: Variaveis.$corDeFundoQuaternaria;
}
</style>
