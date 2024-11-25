import styled from 'styled-components'
import { Props } from '.'

export const Texto = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  line-height: 22px;
  color: ${(props) =>
    props.tipo === 'principal'
      ? props.theme.corTextoPrincipal
      : props.theme.corTextoSecundaria};
  background-color: ${(props) =>
    props.inBox ? props.theme.corDeFundoSecundaria : props.theme.corDeFundo};
`
