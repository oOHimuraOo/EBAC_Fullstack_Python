<script lang="ts">
import { getAllUsers } from '@/utils/fetcher/axios'
import { defineComponent, reactive } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const estado = reactive({
  user: '',
  senha: '',
  login: false,  // Começa como 'false', pois não se sabe se está logado
})

async function efetuarLogin(u: string, s: string) {
  try {
    // Espera pela resposta dos usuários
    const users: any[] = await getAllUsers()

    const user = users.find(usuario => usuario.nome === u)

    if (user) {
      if (user.senha === s) {
        // Caso o login seja bem-sucedido, armazena os dados no localStorage
        localStorage.setItem('userId', user.id)
        localStorage.setItem('userName', user.nome)  // Corrigido para 'nome'
        localStorage.setItem('loggedIn', 'true')
        estado.login = true
        console.log('sucesso!')
      } else {
        console.error('Senha incorreta')
        estado.login = false
      }
    } else {
      console.error('Usuário incorreto')
      estado.login = false
    }
  } catch (error) {
    console.error('Erro ao buscar usuário', error)
    estado.login = false
  }
}

async function verificar_login(u: string, s: string): Promise<boolean> {
  // Chama a função de login e verifica se o login foi bem-sucedido
  await efetuarLogin(u, s)

  const log: string | null = localStorage.getItem('loggedIn')
  const logado: boolean = log == null || log == 'false' ? false : true
  estado.login = logado

  if (logado) {
    estado.user = ''
    estado.senha = ''
    const usuario = document.getElementById('user') as HTMLInputElement
    usuario.value = ''
    const senha = document.getElementById('password') as HTMLInputElement
    senha.value = ''
  } else {
    if (localStorage.getItem('usuario') !== null) {
      localStorage.removeItem('usuario')
    }
  }
  return logado
}

export default defineComponent({
  name: 'LoginComponent',
  setup() {
    const router = useRouter()

    async function handleSubmit() {
      const logado = await verificar_login(estado.user, estado.senha)
      if (logado) {
        router.push('/feed')
      }
    }

    return {
      estado,
      handleSubmit,
    }
  },
  components: {
    RouterLink,
  },
})
</script>

<template>
  <div class="container">
    <form action="">
      <h3>Logar</h3>
      <p v-if="!estado.login" class="visible">Usuário ou senha incorretos!</p>
      <label for="user">Usuário</label>
      <input type="text" id="user" v-model="estado.user" />
      <label for="password">Senha</label>
      <input type="password" id="password" v-model="estado.senha" />
      <button type="submit" @click.prevent="handleSubmit">Entrar</button>
    </form>
    <router-link to="/register">Registrar nova conta</router-link>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/Variaveis.scss';
@use 'sass:color';

form {
  display: flex;
  flex-direction: column;

  h3 {
    font-size: Variaveis.$fontSizeG;
    font-weight: bold;
    color: Variaveis.$corSecundaria;
    margin-bottom: 16px;
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
    font-size: Variaveis.$fontSizeP;
    font-weight: bolder;
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
</style>
