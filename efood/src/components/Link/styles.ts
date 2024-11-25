import styled from 'styled-components'
import { Props } from '.'
import * as V from '../../utils/Variaveis'
import { Link } from 'react-router-dom'

export const LinkEstilo = styled(Link)<Props>`
  background-color: ${(props) =>
    props.color ? V.Colors.Bege : V.Colors.Vermelho};
  padding: 4px 6px;
  color: ${(props) => (props.color ? V.Colors.Vermelho : V.Colors.Bege)};
  font-size: ${V.TxSize.M};
  line-height: ${V.lineHeight.M2};
  font-weight: ${V.TxWeight.G};
`
