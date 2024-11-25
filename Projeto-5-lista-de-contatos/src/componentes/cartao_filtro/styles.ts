import styled from 'styled-components'
import { Cores } from '../../utilidades/variaveis'

type props = {
  ativo: boolean
}

export const Cartao = styled.div<props>`
  padding: 8px;
  color: ${(props) =>
    props.ativo ? `${Cores.CartaoAtivo}` : `${Cores.CartaoInativo}`};
  border: 2px solid
    ${(props) =>
      props.ativo ? `${Cores.CartaoAtivo}` : `${Cores.CartaoInativo}`};
  background-color: ${(props) =>
    props.ativo
      ? `${Cores.PlanoDeFundoCartaoAtivo}`
      : `${Cores.PlanoDeFundoCartaoInativo}`};
  border-radius: 16px;
  cursor: pointer;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Etiqueta = styled.span`
  font-size: 14px;
`
