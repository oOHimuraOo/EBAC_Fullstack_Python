import styled from 'styled-components'
import { Cores } from '../../utilidades/variaveis'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  color: ${Cores.FormTexto};
  font-weight: bold;
  font-size: 14px;

  input {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`
export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  input {
    margin-right: 6px;
  }

  label {
    margin-right: 12px;
  }
`

export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
export const EstrelaContainer = styled.div`
  display: inline-block;
  font-size: 2rem;
  position: relative;
`
export const EstrelaInput = styled.input`
  display: none;

  &:checked + label {
    color: ${Cores.FavoritosVerdadeiro};
  }
`
export const EstrelaLabel = styled.label`
  color: ${Cores.FavoritosFalso};
  cursor: pointer;
  transition: color 0.3s;
  text-align: center;

  &::before {
    content: '★';
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover,
  &:hover ~ label {
    color: ${Cores.FavoritosVerdadeiro};
  }
`
