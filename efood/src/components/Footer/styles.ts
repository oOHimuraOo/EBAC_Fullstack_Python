import styled from 'styled-components'
import * as V from '../../utils/Variaveis'

export const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
`

export const Redes = styled.ul`
  display: flex;
  margin-top: 32px;
  margin-bottom: 80px;
`

export const Middle = styled.li`
  margin-left: 8px;
  margin-right: 8px;
`

export const TextoFooter = styled.p`
  font-size: ${V.TxSize.SS};
  line-height: ${V.lineHeight.SS};
  font-weight: ${V.TxWeight.M};
  max-width: 480px;
  text-align: center;
`
