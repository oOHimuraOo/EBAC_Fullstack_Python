import styled from 'styled-components'
import * as V from '../../utils/Variaveis'

export const FoodsContainer = styled.div`
  background-color: ${V.Colors.BegeClaro};
  padding: 40px 171px 40px;

  h2 {
    margin-bottom: 24px;
    font-size: ${V.TxSize.GGG};
    line-height: ${V.lineHeight.GGG};
    font-weight: ${V.TxWeight.GG};
  }
`

export const FoodList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;
`
