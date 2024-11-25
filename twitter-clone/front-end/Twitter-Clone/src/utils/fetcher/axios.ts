import axios from 'axios'

interface UserStatusUpdate {
  logged_in: boolean
}

const api = axios.create({
  baseURL: 'https://twt-api.vercel.app/api/',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getAllUsers = async () => {
  try {
    const response = await api.get('usuarios/')
    return response.data
  } catch (error) {
    console.error('Erro ao buscar usuários', error)
    throw error
  }
}

export const getUser = async (id: string | number | null) => {
  if (id == null) {
    return
  }

  try {
    const response = await api.get(`usuarios/${id}/`)
    return response.data
  } catch (error) {
    console.error('erro ao buscar usuario', error)
    throw error
  }
}

export const updateUserLoggedIn = async (
  id: string | number,
  status: UserStatusUpdate,
) => {
  try {
    const response = await api.patch(`usuarios/${id}/`, status)
    return response.data
  } catch (error) {
    console.error('erro ao atualizar usuario', error)
    throw error
  }
}

export const getAllTweets = async () => {
  try {
    const response = await api.get('tweets/')
    return response.data
  } catch (error) {
    console.error('Erro ao buscar tweets', error)
    throw error
  }
}

// Função para criar um novo usuário
export const createUsuario = async (usuarioData: {
  nome: string
  senha: string
}) => {
  try {
    console.log('Payload de criação de usuário:', usuarioData)
    const response = await api.post('usuarios/', usuarioData)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error('Erro ao criar usuário', error)
    throw error
  }
}

export const createTweet = async (tweetData: {
  post: string
  owner: number
}) => {
  try {
    const response = await api.post('tweets/', tweetData)
    return response.data
  } catch (error) {
    console.error('Erro ao criar tweet', error)
    throw error
  }
}

export default api
