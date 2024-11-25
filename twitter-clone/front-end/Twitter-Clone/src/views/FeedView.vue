<script setup lang="ts">
import PostTweet from '../components/PostTweet.vue'
import { onMounted, reactive } from 'vue'
import { getAllTweets } from '@/utils/fetcher/axios'
import perf from '../assets/imgs/icons/profile-circle-svgrepo-com.svg'

interface Tweet {
  id: number;
  owner: number;
  owner_name: string;
  image: string;
  post: string;
  data_postagem: string;
  hora_postagem: string;
}

const estado = reactive<{ refresh_count: number, tweets: Tweet[] }>({
  refresh_count: 0,
  tweets: [],
})

async function coletarTweets() {
  try {
    const tweets = await getAllTweets()
    const novos_tweets = tweets.filter(
      (item: Tweet) => !estado.tweets.some(tweet => tweet.id === item.id),
    )
    if (estado.refresh_count === 0) {
      novos_tweets.forEach((tweet: Tweet) => {
        estado.tweets.push(tweet)
        estado.refresh_count++
      })
    } else {
      novos_tweets.forEach((tweet: Tweet) => {
        estado.tweets.unshift(tweet)
        estado.refresh_count++
      })
    }
  } catch (error) {
    console.error('Erro ao buscar tweets', error)
  }
}

function handleTweetSubmited() {
  coletarTweets()
}

onMounted(() => {
  coletarTweets()
  setInterval(() => {
    coletarTweets()
  }, 10000)
})

function convertToBrasiliaTime(date: string, time: string): string {
  // Cria um objeto Date a partir da data e hora fornecidas
  const dateTimeString = `${date}T${time}Z` // Adiciona 'Z' para indicar que está em UTC
  const serverDate = new Date(dateTimeString)

  // Define as opções para formatação
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'America/Sao_Paulo', // Fuso horário de Brasília
    hour12: false, // Formato de 24 horas
  }

  // Usa Intl.DateTimeFormat para converter e formatar a data e hora
  const formatter = new Intl.DateTimeFormat('pt-BR', options)
  return formatter.format(serverDate)
}

function convertToFormattedArray(dateTime: string): [string, string] {
  // Separa a string em data e hora
  const [datePart, timePart] = dateTime.split(', ')

  // Remove espaços e retorna o array com a data e hora formatadas
  return [datePart.trim(), timePart.trim()]
}
</script>

<template>
  <div class="container">
    <div class="post_container">
      <PostTweet @tweet-submited="handleTweetSubmited" />
    </div>
    <div class="tweets_container">
      <ul>
        <span>feed</span>
        <li v-for="tweet in estado.tweets" :key="tweet.id">
          <div>
            <img :src="perf || tweet.image" alt="perfil" />
            <h3>{{ tweet.owner_name }}</h3>
          </div>
          <p>
            {{ tweet.post }}
          </p>
          <p class="data_hora">
            data:{{
              convertToFormattedArray(
                convertToBrasiliaTime(tweet.data_postagem, tweet.hora_postagem),
              )[0]
            }}
            hora:{{
              convertToFormattedArray(
                convertToBrasiliaTime(tweet.data_postagem, tweet.hora_postagem),
              )[1]
            }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/Variaveis.scss';

.post_container {
  margin: 32px 0;
}

.tweets_container {
  padding: 16px;
  border: 2px solid Variaveis.$corTerciaria;
  border-radius: 8px;
  background-color: Variaveis.$corDeFundoQuaternaria;
  ul {
    display: flex;
    flex-direction: column;

    span {
      margin-bottom: 32px;
      font-size: Variaveis.$fontSizeM;
      color: Variaveis.$corSecundaria;
      font-weight: bold;
      text-transform: capitalize;
    }

    li {
      border: 2px solid Variaveis.$corTerciaria;
      border-radius: 8px;
      margin-bottom: 8px;
      padding: 8px;
      background-color: Variaveis.$corDeFundoPrimaria;
      div {
        display: flex;
        align-items: center;
        margin-bottom: 8px;

        img {
          max-height: 30px;
          max-width: 30px;
          border: 2px solid Variaveis.$corTerciaria;
          border-radius: 50px;
          height: 100%;
          width: 100%;
          margin-right: 8px;
        }

        h3 {
          color: Variaveis.$corSecundaria;
          font-size: Variaveis.$fontSizeM;
          text-transform: capitalize;
        }
      }

      p {
        font-size: Variaveis.$fontSizePP;
        color: Variaveis.$corSecundaria;
        overflow-wrap: break-word;
      }

      .data_hora {
        display: flex;
        justify-content: end;
        text-align: right;
        font-size: Variaveis.$fontSizePPP;
        color: Variaveis.$corTerciaria;
      }
    }
  }
}
</style>
