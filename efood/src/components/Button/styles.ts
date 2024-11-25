import styled from 'styled-components'
import * as V from '../../utils/Variaveis'

export const BotaoEstilo = styled.button`
  background-color: ${V.Colors.Bege};
  color: ${V.Colors.Vermelho};
  font-size: ${V.TxSize.M};
  line-height: ${V.lineHeight.M2};
  font-weight: ${V.TxWeight.G};
  display: block;
  width: 100%;
  padding: 4px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${V.Colors.BegeHover};
  }
`
