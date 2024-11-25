import { rest } from 'msw'
import { setupServer } from 'msw/node'
import Produtos from '..'
import { renderizaComProvider } from '../../../utils/tests'
import { screen, waitFor } from '@testing-library/react'

const mocks = [
  {
    id: 1,
    categoria: 'RPG',
    imagem: 'https://via.placeholder.com/300x400',
    plataformas: ['windows'],
    preco: 10.5,
    precoAntigo: 55.5,
    titulo: 'elden ring'
  },
  {
    id: 2,
    categoria: 'RPG',
    imagem: 'https://via.placeholder.com/300x400',
    plataformas: ['windows'],
    preco: 10.5,
    precoAntigo: 155.5,
    titulo: 'hogwarts legacy'
  },
  {
    id: 3,
    categoria: 'RPG',
    imagem: 'https://via.placeholder.com/300x400',
    plataformas: ['windows'],
    preco: 10.5,
    precoAntigo: 55.5,
    titulo: 'terraria'
  },
  {
    id: 4,
    categoria: 'ação',
    imagem: 'https://via.placeholder.com/300x400',
    plataformas: ['nitendo'],
    preco: 10.5,
    precoAntigo: 155.5,
    titulo: 'tibia'
  }
]

const server = setupServer(
  rest.get(
    'http://localhost:4000/produtos',
    (requisicao, resposta, contexto) => {
      return resposta(contexto.json(mocks))
    }
  )
)

describe('Testes para o container produtos', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close)

  test('deve renderizar corretamente com o texto de carregamento', () => {
    renderizaComProvider(<Produtos />)
    expect(screen.getByText('Carregando...')).toBeInTheDocument()
  })

  test('deve renderizar corretamente com a listagem de jogos.', async () => {
    renderizaComProvider(<Produtos />)
    await waitFor(() => {
      expect(screen.getByText('tibia')).toBeInTheDocument()
    })
  })
})
