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
