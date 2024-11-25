import styled from 'styled-components'
import * as V from '../../utils/Variaveis'

export const HeaderBar = styled.header`
  background-color: ${V.Colors.BegeClaro};
  padding: 24px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 75%; //boto ?

  div {
    display: flex;
    align-items: center;
  }

  a {
    color: ${V.Colors.Vermelho};
    font-weight: ${V.TxWeight.G};
    font-size: ${V.TxSize.M};
    line-height: ${V.lineHeight.M};
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`
export const LinkItem = styled.li`
  margin-right: 16px;
`
export const CarrinhoEstilo = styled.img`
  max-width: 20px;
  max-height: 20px;
  width: 100%;
`
export const LinkCarrinho = styled.a`
  display: flex;
  cursor: pointer;

  img {
    margin-left: 16px;
  }
`

export const LogoEstilo = styled.img`
  max-width: 35px;
  max-height: 35px;
  width: 100%;
`
export const HeaderBg = styled.div`
  padding: 40px 40px 80px;
  background-color: ${V.Colors.Bege};
`
