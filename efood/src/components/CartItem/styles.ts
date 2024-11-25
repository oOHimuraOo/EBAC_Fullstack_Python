import styled from 'styled-components'
import * as V from '../../utils/Variaveis'

export const Item = styled.li`
  background-color: ${V.Colors.Bege};
  color: ${V.Colors.Vermelho};
  display: flex;
  padding: 8px;
  width: 100%;
  margin-bottom: 16px;

  > img {
    width: 80px;
    height: 80px;
    margin-right: 8px;
  }

  h3 {
    font-size: ${V.TxSize.G};
    line-height: ${V.lineHeight.G};
    font-weight: ${V.TxWeight.GG};
  }

  h4 {
    font-size: ${V.TxSize.G};
    line-height: ${V.lineHeight.G};
    font-weight: ${V.TxWeight.M};
    margin-bottom: 8px;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const PrecoQuantidadeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${V.Colors.Vermelho};
    font-size: 20px;
    line-height: ${V.lineHeight.G};
    font-weight: ${V.TxWeight.G};
  }

  img {
    margin-left: 8px;
  }
`

export const Quantidade = styled.span`
  margin-left: 8px;
  margin-right: 8px;
`

export const PrecoUnitario = styled.span`
  font-size: ${V.TxSize.S};
  line-height: ${V.lineHeight.S};
  font-weight: ${V.TxWeight.M};
  color: ${V.Colors.VermelhoClaro};
`

export const Alinhador = styled.div`
  display: flex;
  align-items: center;

  a {
    cursor: pointer;
  }
`
