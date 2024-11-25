import { product } from '../../services/api'
import FoodClass from '../models/food'
import RestaurantClass from '../models/restaurants'

type comidaApi = {
  id: number
  foto: string
  nome: string
  descricao: string
  preco: number
  porcao: string
}

type restauratesApi = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: comidaApi[]
}

export async function converterValores(): Promise<RestaurantClass[]> {
  const url = 'https://fake-api-tau.vercel.app/api/efood/restaurantes'

  try {
    const response = await fetch(url)
    const data = await response.json()

    // eslint-disable-next-line no-prototype-builtins
    if (data.hasOwnProperty('erro')) {
      console.error('Erro na API', data.erro)
      return []
    }
    const novoArray: RestaurantClass[] = []

    for (let x = 0; x < data.length; x++) {
      const id = data[x].id - 1
      const nome = `${data[x].titulo}`
      const estilo = `${data[x].tipo}`
      const news = data[x].destacado ? gerarNews() : ''
      const descricao = `${data[x].descricao}`
      const image = `${data[x].capa}`
      const score = `${data[x].avaliacao}`
      const food: FoodClass[] = []
      const link = `/${id}`
      data[x].cardapio.forEach((comida: comidaApi) => {
        food.push(converterComida(comida, link))
      })

      novoArray.push(
        new RestaurantClass(
          id,
          image,
          nome,
          news,
          estilo,
          score,
          descricao,
          'Saiba mais',
          link,
          food
        )
      )
    }
    console.log(novoArray)

    return novoArray
  } catch (error) {
    console.error('Erro ao buscar dados:', error)
    return []
  }
}

function gerarNews(): string {
  return 'Novidade'
}

function converterComida(comida: comidaApi, link: string): FoodClass {
  const id = comida.id - 1
  const image = comida.foto
  const news = ''
  const promocao = ''
  const name = comida.nome
  const descricao = comida.descricao
  const preco = `${comida.preco}`
  const size = comida.porcao
  const linkcomida = `${link}/${id}`

  const novaComida = new FoodClass(
    id,
    image,
    promocao,
    news,
    name,
    descricao,
    preco,
    size,
    linkcomida
  )
  return novaComida
}

export function converterModel2(data: restauratesApi[]): RestaurantClass[] {
  const novoArray: RestaurantClass[] = []
  data.forEach((Restaurante) => {
    const id = Restaurante.id - 1
    const nome = `${Restaurante.titulo}`
    const estilo = `${Restaurante.tipo}`
    const news = Restaurante.destacado ? gerarNews() : ''
    const descricao = `${Restaurante.descricao}`
    const image = `${Restaurante.capa}`
    const score = `${Restaurante.avaliacao}`
    const food: FoodClass[] = []
    const link = `/${id}`
    Restaurante.cardapio.forEach((comida: comidaApi) => {
      food.push(converterComida(comida, link))
    })
    novoArray.push(
      new RestaurantClass(
        id,
        image,
        nome,
        news,
        estilo,
        score,
        descricao,
        'Saiba mais',
        link,
        food
      )
    )
  })
  return novoArray
}

export type food = {
  id: number
  image: string
  promocao: string
  news: string
  name: string
  description: string
  price: string
  size: string
  link: string
  qtd: number
}

export function FoodToObject(food: FoodClass): food {
  const object: food = {
    id: food.id,
    image: food.image,
    promocao: food.promocao,
    news: food.news,
    name: food.name,
    description: food.description,
    price: food.price,
    size: food.size,
    link: food.link,
    qtd: 1
  }

  return object
}

export function converterFormatacaoDePreco(preco: number | string): string {
  if (typeof preco === 'number' || !isNaN(Number(preco))) {
    let novoPreco = 0

    if (typeof preco === 'string') {
      novoPreco = parseFloat(preco)
    } else {
      novoPreco = preco
    }

    const precoFormatado = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(novoPreco)

    return precoFormatado
  } else {
    const precoString = preco.replace(/\D/g, '')
    const novoPreco = parseFloat(precoString)
    const precoFormatado = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(novoPreco)

    return precoFormatado
  }
}

export function converteProdutos(array: food[]): product[] {
  const novoArray: product[] = []
  array.forEach((comida) => {
    for (let x = 0; x < comida.qtd; x++) {
      const item: product = {
        id: comida.id,
        price: parseFloat(comida.price)
      }
      novoArray.push(item)
    }
  })

  return novoArray
}

export function converteData(data: string): number[] {
  const [year, month] = data.split('-')

  return [parseInt(year), parseInt(month)]
}
