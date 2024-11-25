import styled from 'styled-components'
import { Texto } from '../../components/Texto/styles'

export const Descricao = styled(Texto)`
  margin-top: 24px;
  margin-bottom: 40px;
`
export const Botao = styled.button`
  font-size: 10px;
  font-weight: bold;
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.corTextoTerciaria};
  background-color: ${(props) => props.theme.corBotaoPrimaria};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.corBotaoSecundaria};
  }

  @media (max-width: 768px) {
    display: block;
    margin: 0 auto;
    margin-bottom: 16px;
  }
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    position: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
