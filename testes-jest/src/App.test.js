import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe('Testes para o componente principal', () => {
  test('deve renderizar corretamente', ()=>{
    render(<App />)
    expect(screen.getByText('cadastrar')).toBeInTheDocument()
  })

  test('Deve adicionar "estudar React" na lista', () => {
    render(<App />)
    fireEvent.change(screen.getByTestId('campo-tarefa'),{
      target: {
        value: 'estudar react'
      }
    })
    fireEvent.click(screen.getByTestId('btn-tarefa'))
    expect(screen.getByText('estudar react')).toBeInTheDocument()
  })
})