import styled from 'styled-components'
import * as V from '../../utils/Variaveis'

export const Card = styled.div`
  background-color: ${V.Colors.Branco};
  border: 1px solid ${V.Colors.Vermelho};
  border-top: 0;
  padding: 0 8px 8px;
  color: ${V.Colors.Vermelho};

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
  }
`

export const Titulo = styled.h3`
  font-size: ${V.TxSize.G};
  line-height: ${V.lineHeight.G};
  font-weight: ${V.TxWeight.G};
`

export const NotaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Nota = styled.h4`
  font-size: ${V.TxSize.G};
  line-height: ${V.lineHeight.G};
  font-weight: ${V.TxWeight.G};
`

export const Estrela = styled.img`
  margin-left: 8px;
  max-width: 21px;
  max-height: 21px;
  width: 100%;
`

export const Texto = styled.p`
  font-size: ${V.TxSize.M};
  line-height: ${V.lineHeight.M};
  font-weight: ${V.TxWeight.M};
  margin-bottom: 16px;
  min-height: 110px;
  max-height: 130px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical; /* Corrige o erro de digitação */
  -webkit-line-clamp: 6;

  &:hover {
    max-height: 150px;
    -webkit-line-clamp: 7;
  }
`
export const ImagemContainer = styled.div`
  position: relative;
  display: flex;
`

export const Positioner = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Imagem = styled.img`
  width: 100%;
  max-width: 472px;
  max-height: 217px;
  overflow: hidden;
  object-fit: cover;
`
