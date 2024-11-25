import { fireEvent, screen } from '@testing-library/react'
import Produto from '..'
import { renderizaComProvider } from '../../../utils/tests'

const jogo = {
  id: 2,
  categoria: 'RPG',
  imagem: 'https://via.placeholder.com/300x400',
  plataformas: ['windows'],
  preco: 10.5,
  precoAntigo: 155.5,
  titulo: 'hogwarts legacy'
}

describe('testes para o componente produto', () => {
  test('deve renderizar corretamente', () => {
    renderizaComProvider(<Produto game={jogo} />)
    expect(screen.getByText('hogwarts legacy')).toBeInTheDocument()
  })

  test('deve renderizar corretamente', () => {
    const { store } = renderizaComProvider(<Produto game={jogo} />)
    const botao = screen.getByTestId('botaoComprar')
    fireEvent.click(botao)

    expect(store.getState().carrinho.itens).toHaveLength(1)
  })
})
