<script setup lang="ts">
import { reactive, watch, defineEmits } from 'vue'
import images from '@/assets/imgs/icons/image-picture-svgrepo-com.svg'
import emoji from '@/assets/imgs/icons/emoji-smile-svgrepo-com.svg'
import calendar from '@/assets/imgs/icons/calendar-svgrepo-com.svg'
import location from '@/assets/imgs/icons/location-pin-svgrepo-com.svg'
import { createTweet } from '@/utils/fetcher/axios'

const emit = defineEmits<{ (event: 'tweetSubmited'): void }>()
const estado = reactive<{
  post: string
  caracteres: number
  visibilidade: boolean
}>({
  post: '',
  caracteres: 0,
  visibilidade: true,
})

function postValido(p: string): boolean {
  if (p === '' || p == null) {
    return false
  }
  if (p.length > 300) {
    return false
  }
  return true
}

async function handleSubmit() {
  const idStr = localStorage.getItem('userId')
  const id = idStr ? Number(idStr) : null

  if (id !== null && postValido(estado.post)) {
    try {
      await createTweet({ post: estado.post, owner: id })
      emit('tweetSubmited')
      estado.post = ''
      estado.caracteres = 0
      const textarea = document.getElementById('post') as HTMLTextAreaElement
      textarea.value = ''
    } catch (error) {
      console.error('Erro ao criar tweet', error)
    }
  } else {
    console.error('ID inválido ou post inválido')
  }
}

function adjustHeigt(car: number) {
  const textarea = document.getElementById('post') as HTMLTextAreaElement
  if (textarea) {
    textarea.style.height = 'auto'
    textarea.style.height = `${textarea.scrollHeight}px`
    if (car > 300) {
      textarea.classList.add('excedido')
    } else {
      if (textarea.classList.contains('excedido')) {
        textarea.classList.remove('excedido')
      }
    }
  }
}

function handleVisibility() {
  estado.visibilidade = !estado.visibilidade
}

watch(
  () => estado.post,
  post => {
    estado.caracteres = post.length
    adjustHeigt(post.length)
  },
)
</script>

<template>
  <div class="container">
    <div class="text_area">
      <textarea
        id="post"
        placeholder="O que está acontecendo?"
        v-model="estado.post"
      ></textarea>
      <span v-if="estado.caracteres > 300" style="color: red"
        >O seu tweet excede o limite de caracteres!
      </span>
      <span>{{ estado.caracteres }}/300</span>
    </div>
    <div class="buttons_area">
      <a href="#" @click="handleVisibility">{{
        estado.visibilidade
          ? 'Todos podem responder'
          : 'Apenas seguidores podem responder'
      }}</a>
      <div>
        <a href="#">
          <img :src="images" alt="" />
        </a>
        <a href="#">
          <img :src="emoji" alt="" />
        </a>
        <a href="#">
          <img :src="calendar" alt="" />
        </a>
        <a href="#">
          <img :src="location" alt="" />
        </a>
      </div>
      <button type="submit" @click.prevent="handleSubmit">Tweetar</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/Variaveis.scss';
@use 'sass:color';

.container {
  border: 2px solid Variaveis.$corTerciaria;
  border-radius: 8px;
  background-color: Variaveis.$corDeFundoQuaternaria;
}

.text_area {
  display: flex;
  flex-direction: column;
  padding: 16px;
  align-items: flex-end;

  textarea {
    resize: none;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid Variaveis.$corTerciaria;
    font-size: Variaveis.$fontSizeM;
    line-height: 22px;
    min-height: 22px;
    max-height: calc(22px * 3);
    overflow-y: hidden;
    padding: 0;
    color: Variaveis.$corSecundaria;
    width: 100%;

    &:focus {
      outline: none;
    }

    &.excedido {
      color: red;
    }
  }

  span {
    font-size: Variaveis.$fontSizePPP;
    color: Variaveis.$corTerciaria;
  }
}

.buttons_area {
  padding-left: 16px;
  padding-bottom: 16px;
  position: relative;

  a {
    color: Variaveis.$corDeFundoTerciaria;
    cursor: pointer;

    &:hover {
      color: color.adjust(Variaveis.$corDeFundoTerciaria, $lightness: -5%);
    }
  }

  div {
    margin: 8px 0;

    a {
      margin-right: 8px;

      img {
        max-height: 20px;
        max-width: 20px;
      }
    }
  }

  button {
    background-color: Variaveis.$corDeFundoTerciaria;
    border: none;
    padding: 8px;
    border-radius: 16px;
    outline: none;
    width: 130px;
    position: absolute;
    bottom: 16px;
    right: 16px;
    cursor: pointer;

    &:hover {
      background-color: color.adjust(
        Variaveis.$corDeFundoTerciaria,
        $lightness: -5%
      );
    }
  }
}
</style>
