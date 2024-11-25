import styled from 'styled-components'
import * as V from '../../utils/Variaveis'

export const RestaurantsContainer = styled.section`
  background-color: ${V.Colors.BegeClaro};
  padding: 80px 171px 120px;

  h2 {
    margin-bottom: 24px;
    font-size: ${V.TxSize.GGG};
    line-height: ${V.lineHeight.GGG};
    font-weight: ${V.TxWeight.GG};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px 80px;
`
