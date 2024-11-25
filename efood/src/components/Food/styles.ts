import styled from 'styled-components'
import * as V from '../../utils/Variaveis'

export const FoodCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${V.Colors.Vermelho};
  padding: 8px;
  color: ${V.Colors.Bege};
  min-height: 434px;
`
export const FoodImageContainer = styled.div`
  display: flex;
  position: relative;
`

export const FoodImage = styled.img`
  max-height: 167px;
  object-fit: cover;
  overflow: hidden;
  width: 100%;
  height: 167px;
`

export const FoodTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`

export const Positioner = styled.div`
  position: absolute;
  top: 8px;
  right: 0;
`

export const FoodTitle = styled.h3`
  font-size: ${V.TxSize.G};
  line-height: ${V.lineHeight.G};
  font-weight: ${V.TxWeight.GG};
`

export const FoodPrice = styled.h4`
  font-size: ${V.TxSize.G};
  line-height: ${V.lineHeight.G};
  font-weight: ${V.TxWeight.GG};
`

export const FoodText = styled.p`
  font-size: ${V.TxSize.M};
  line-height: ${V.lineHeight.M};
  font-weight: ${V.TxWeight.M};
  margin-top: 8px;
  margin-bottom: 8px;
  max-height: 130px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical; /* Corrige o erro de digitação */
  -webkit-line-clamp: 6;
`

export const FoodButton = styled.button`
  background-color: ${V.Colors.Bege};
  color: ${V.Colors.Vermelho};
  padding: 4px;
  font-size: ${V.TxSize.M};
  line-height: ${V.lineHeight.M};
  font-weight: ${V.TxWeight.G};
  width: 100%;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${V.Colors.BegeHover};
  }
`

export const ModalContainer = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 2;

  &.visivel {
    display: flex;
  }
`
export const Overlay = styled.div`
  &::before {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${V.Colors.Preto};
    content: '';
    z-index: 1;
  }
`
export const ModalBackground = styled.div`
  position: fixed;
  right: calc(50% - 512px);
  left: calc(50% - 512px);
  top: calc(50% - 172px);
  bottom: calc(50% - 172px);
  max-width: 1024px;
  min-height: 344px;
  background-color: ${V.Colors.Vermelho};
  padding: 32px;
  display: flex;
  z-index: 2;
`

export const ModalImage = styled.img`
  max-width: 280px;
  max-height: 280 px;
  margin-right: 32px;
`

export const ModaltDescriptionContainer = styled.div`
  color: ${V.Colors.Branco};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  h3 {
    font-size: ${V.TxSize.G};
    line-height: ${V.lineHeight.G};
    font-weight: ${V.TxWeight.GG};
  }

  p {
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: ${V.TxSize.M};
    line-height: ${V.lineHeight.M};
    font-weight: ${V.TxWeight.M};
  }

  h4 {
    font-size: ${V.TxSize.M};
    line-height: ${V.lineHeight.M};
    font-weight: ${V.TxWeight.M};
  }
`

export const ModalBotao = styled.button`
  padding: 4px 8px;
  background-color: ${V.Colors.Bege};
  color: ${V.Colors.Vermelho};
  font-size: ${V.TxSize.M};
  line-height: ${V.lineHeight.M};
  font-weight: ${V.TxWeight.G};
  border: none;
  width: fit-content;
  cursor: pointer;

  &:hover {
    background-color: ${V.Colors.BegeHover};
  }
`

export const Modallink = styled.a`
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }
`
