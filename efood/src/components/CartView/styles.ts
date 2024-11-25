import styled from 'styled-components'
import * as V from '../../utils/Variaveis'

export const ListaDeCompras = styled.ul`
  max-height: 500px;
  overflow-y: scroll;
  margin-bottom: 16px;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Total = styled.p`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: ${V.TxSize.M};
  line-height: ${V.lineHeight.M};
  font-weight: ${V.TxWeight.G};
`
