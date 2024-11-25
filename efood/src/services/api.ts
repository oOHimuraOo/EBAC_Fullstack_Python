import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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

export type product = {
  id: number
  price: number
}

export type deliveryInfo = {
  receiver: string
  address: {
    description: string
    city: string
    zipCode: string
    number: number
    complement: string
  }
}

export type paymentInfo = {
  card: {
    name: string
    number: string
    code: number
    expires: {
      month: number
      year: number
    }
  }
}

type purchasePayload = {
  products: product[]
  delivery: deliveryInfo
  payment: paymentInfo
}

type purchaseResponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<restauratesApi[], void>({
      query: () => 'restaurantes'
    }),
    purchase: builder.mutation<purchaseResponse, purchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const { useGetRestaurantsQuery, usePurchaseMutation } = api
export default api
