import styled from 'styled-components'
import * as V from '../../utils/Variaveis'

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const LogoEstilo = styled.img`
  margin: 64px;
`

export const FraseDestaque = styled.p`
  text-align: center;
  font-size: ${V.TxSize.GGG};
  line-height: ${V.lineHeight.GGG};
  font-weight: ${V.TxWeight.GG};
  color: ${V.Colors.Vermelho};
  width: 539px;
`

export const BannerImagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 24px;

  div {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  &::before {
    position: absolute;
    top: 210px;
    left: 0;
    width: 100%;
    height: 280px;
    background-color: ${V.Colors.Preto};
    opacity: 0.75;
    content: '';
  }
`

export const LogoRestaurante = styled.img`
  max-width: 125px;
  max-height: 125px;
  margin: 16px auto;
`

export const NomeRestaurante = styled.h2`
  color: ${V.Colors.Branco};
  font-weight: ${V.TxWeight.GG};
  font-size: ${V.TxSize.GG};
  line-height: ${V.lineHeight.GG};
`

export const EstiloRestaurante = styled.h3`
  color: ${V.Colors.Branco};
  font-weight: ${V.TxWeight.S};
  font-size: ${V.TxSize.GG};
  line-height: ${V.lineHeight.GG};
`
