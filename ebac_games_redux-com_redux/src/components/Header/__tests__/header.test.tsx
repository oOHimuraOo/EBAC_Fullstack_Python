import { screen } from '@testing-library/react'
import Header from '..'
import { renderizaComProvider } from '../../../utils/tests'

describe('Testes para o componente header', () => {
  test('deve renderizar corretamente', () => {
    renderizaComProvider(<Header />)
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })

  test('Deve renderizar com 2 itens no carrinho', () => {
    renderizaComProvider(<Header />, {
      preloadedState: {
        carrinho: {
          itens: [
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
            }
          ]
        }
      }
    })

    expect(screen.getByTestId('texto').innerHTML).toContain('2 itens')
  })
})
