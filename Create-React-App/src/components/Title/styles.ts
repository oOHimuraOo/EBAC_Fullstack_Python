import styled from 'styled-components'
import { Props } from '.'

export const Titulo = styled.h3<Props>`
  color: ${(props) => props.theme.corTextoPrincipal};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
  background-color: ${(props) =>
    props.inBox ? props.theme.corDeFundoSecundaria : props.theme.corDeFundo};
`
