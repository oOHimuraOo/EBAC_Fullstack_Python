// src/views/RegisterView.vue

<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
import { createUsuario } from '@/utils/fetcher/axios'
import { reactive } from 'vue'

const router = useRouter()
const estado = reactive({
  usuario: '',
  senha: '',
  confirma_senha: '',
  error: '',
})

function validarCadastro(u: string, s: string, ss: string): boolean {
  if (u === '' || u == null) {
    estado.error = loadErrorMsg('UN')
    return false
  }

  if (s === '' || s == null) {
    estado.error = loadErrorMsg('SN')
    return false
  }

  if (ss === '' || ss == null) {
    estado.error = loadErrorMsg('SSN')
    return false
  }

  if (s !== ss) {
    estado.error = loadErrorMsg('SDSS')
    return false
  }

  estado.error = loadErrorMsg('OK')
  return true
}

function loadErrorMsg(typeError: string): string {
  switch (typeError) {
    case 'UN':
      return 'O usuario precisa ser preenchido!'
    case 'SN':
      return 'A senha precisa ser preenchida!'
    case 'SSN':
      return 'A confirmação de senha precisa ser preenchida!'
    case 'SDSS':
      return 'A senha precisa ser igual a confirmação de senha!'
    default:
      return ''
  }
}

async function handleSubmit() {
  if (validarCadastro(estado.usuario, estado.senha, estado.confirma_senha)) {
    try {
      const usuarioData = {
        nome: estado.usuario,
        senha: estado.senha,
      }
      console.log('Dados do usuário a serem enviados:', usuarioData)
      await createUsuario(usuarioData)
      router.push('/login')
    } catch (error) {
      estado.error = 'Erro ao cadastrar usuário. Tente novamente.'
      console.error('Erro ao criar usuário', error)
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="centralizador">
      <div class="register_container">
        <h3>Cadastrar</h3>
        <p v-if="estado.error !== ''" class="visible">
          {{ estado.error }}
        </p>
        <form>
          <label for="user">Usuário</label>
          <input type="text" id="user" v-model="estado.usuario" />
          <label for="password">Senha</label>
          <input type="password" id="password" v-model="estado.senha" />
          <label for="password-confirm">Confirmação de senha</label>
          <input
            type="password"
            id="password-confirm"
            v-model="estado.confirma_senha"
          />
          <button type="submit" @click.prevent="handleSubmit">Cadastrar</button>
        </form>
        <RouterLink to="/login">Ir para login</RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/Variaveis.scss';
@use 'sass:color';

.centralizador {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .register_container {
    border: 2px solid Variaveis.$corTerciaria;
    border-radius: 8px;
    background-color: Variaveis.$corDeFundoQuaternaria;
    padding: 16px;

    h3 {
      margin-bottom: 8px;
      font-size: Variaveis.$fontSizeG;
      font-weight: bold;
      color: Variaveis.$corSecundaria;
    }

    p {
      max-width: 220px;
      font-size: Variaveis.$fontSizePPP;
      margin-bottom: 8px;
      color: red;
      display: none;
    }

    .visible {
      display: block;
    }

    form {
      display: flex;
      flex-direction: column;

      label {
        font-size: Variaveis.$fontSizeM;
        font-weight: bold;
        color: Variaveis.$corSecundaria;
        margin-bottom: 6px;
      }

      input {
        background-color: Variaveis.$corDeFundoPrimaria;
        border: 2px solid Variaveis.$corTerciaria;
        border-radius: 4px;
        margin-bottom: 6px;
        padding: 4px;
        color: Variaveis.$corSecundaria;
        outline: none;
      }

      button {
        background-color: Variaveis.$corDeFundoTerciaria;
        outline: none;
        border: none;
        border-radius: 8px;
        padding: 4px;
        margin: 12px;
        cursor: pointer;

        &:hover {
          background-color: color.adjust(
            Variaveis.$corDeFundoTerciaria,
            $lightness: -5%
          );
        }
      }
    }
    a {
      display: flex;
      justify-content: center;
      color: Variaveis.$corDeFundoTerciaria;
      font-size: Variaveis.$fontSizePPP;

      &:hover {
        color: color.adjust(Variaveis.$corDeFundoTerciaria, $lightness: -5%);
      }
    }
  }
}
</style>
