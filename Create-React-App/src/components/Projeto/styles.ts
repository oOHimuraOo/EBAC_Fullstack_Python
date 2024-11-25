import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corBorda};
  padding: 16px;
  background-color: ${(props) => props.theme.corDeFundoSecundaria};
`

export const Botao = styled.a`
  color: ${(props) => props.theme.corTextoQuaternaria};
  font-size: 14px;
  background-color: ${(props) => props.theme.corLinkPrimaria};
  padding: 8px;
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.corLinkSecundaria};
  }
`

export const ContainerDetails = styled.div`
  display: flex;
  margin-bottom: 24px;
  background-color: ${(props) => props.theme.corDeFundoSecundaria};

  img {
    margin-right: 20px;
    max-width: 50px;
    max-height: 50px;
  }
`
