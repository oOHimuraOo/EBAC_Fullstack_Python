<script lang="ts">
import { deslogar, usuarioLogado } from '@/utils/mocks'
import { defineComponent, ref, onMounted, reactive } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import birdLogo from '@/assets/imgs/icons/bird-svgrepo-com.svg'
import hash from '@/assets/imgs/icons/hashtag-svgrepo-com.svg'
import noti from '@/assets/imgs/icons/notifications-svgrepo-com.svg'
import home from '@/assets/imgs/icons/home-svgrepo-com.svg'
import msgs from '@/assets/imgs/icons/mail-alt-3-svgrepo-com.svg'
import perf from '@/assets/imgs/icons/profile-circle-svgrepo-com.svg'
import { getUser } from '@/utils/fetcher/axios'

export default defineComponent({
  name: 'HeaderNavigation',
  setup() {
    const id = localStorage.getItem('userId')
    const userName = ref<string | undefined>('')
    const router = useRouter()
    const perfilImg = ref<string | undefined>('')
    const estado = reactive({
      nome: 'perfil',
    })

    onMounted(async () => {
      if (id) {
        try {
          const user = await getUser(id)
          perfilImg.value = user.profile
          userName.value = user.nome
          estado.nome = userName.value || 'perfil'
          console.log(userName.value)
          console.log('URL do perfil:', perfilImg.value)
        } catch (error) {
          console.error('Erro ao buscar usuário:', error)
        }
      }
    })

    function handleLogout() {
      localStorage.removeItem('userId')
      localStorage.removeItem('userName')
      localStorage.removeItem('loggedIn')
      router.push('/')
    }

    return {
      handleLogout,
      birdLogo,
      hash,
      noti,
      home,
      msgs,
      perf,
      perfilImg,
      estado,
    }
  },
  components: {
    RouterLink,
  },
})
</script>

<template>
  <div class="menu_container visible">
    <nav>
      <a href="#">
        <img :src="birdLogo" alt="logo" />
      </a>
      <div>
        <ul>
          <li>
            <RouterLink to="/">
              <img :src="home" alt="" />
              Inicio
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/">
              <img :src="hash" alt="" />
              Explorar
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/">
              <img :src="noti" alt="" />
              Notificações
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/">
              <img :src="msgs" alt="" />
              Mensagens
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="menu_logout">
        <button>
          <img :src="perf || perfilImg" alt="perfil" />{{ estado.nome }}
        </button>
        <button @click="handleLogout">logout</button>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/Variaveis.scss';

.menu_container {
  position: fixed;
  top: 0;
  height: 100vh;
  background-color: Variaveis.$corDeFundoPrimaria;
  padding: 16px;
  width: 10vw;
  display: none;
  border-right: 2px solid Variaveis.$corDeFundoSecundaria;
}

.visible {
  display: block;
}

nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: Variaveis.$corDeFundoPrimaria;

  a {
    margin: 8px;

    img {
      max-width: 50px;
      max-height: 50px;
    }
  }

  div {
    align-items: start;
    width: 100%;

    ul {
      li {
        margin-top: 8px;
        font-size: Variaveis.$fontSizeM;

        a {
          display: flex;
          align-items: center;
          transition: 0.5s;

          img {
            margin-right: 8px;
            max-width: 30px;
            max-height: 30px;
            height: 30px;
            width: 30px;
          }

          &:hover {
            color: Variaveis.$corDeFundoTerciaria;
            background-color: Variaveis.$corDeFundoQuaternaria;
            border-radius: 16px;
          }
        }
      }
    }
  }

  .menu_logout {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 32px;
    width: 100%;
    height: 100%;

    button {
      padding: 8px;
      border: 2px solid Variaveis.$corDeFundoSecundaria;
      border-radius: 20px;
      max-width: 8vw;
      width: 100%;
      background-color: Variaveis.$corDeFundoPrimaria;
      font-size: Variaveis.$fontSizeP;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: capitalize;
      cursor: pointer;
      font-weight: bolder;

      &:hover {
        background-color: Variaveis.$corDeFundoTerciaria;
      }

      img {
        max-height: 20px;
        max-width: 20px;
        margin-right: 4px;
      }
    }
  }
}
</style>
