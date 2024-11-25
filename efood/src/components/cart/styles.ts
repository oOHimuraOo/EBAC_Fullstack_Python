import styled from 'styled-components'
import * as V from '../../utils/Variaveis'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${V.Colors.Preto};
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 5;

  &.is_open {
    display: flex;
  }
`

export const SideBar = styled.aside`
  background-color: ${V.Colors.Vermelho};
  color: ${V.Colors.Bege};
  z-index: 7;
  padding: 32px 8px 0;
  width: 100%;
  max-width: 360px;
`

export const Total = styled.p`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: ${V.TxSize.M};
  line-height: ${V.lineHeight.M};
  font-weight: ${V.TxWeight.G};
`

export const ListaDeCompras = styled.ul`
  max-height: 500px;
  overflow-y: scroll;
  margin-bottom: 16px;

  &::-webkit-scrollbar {
    display: none;
  }
`
