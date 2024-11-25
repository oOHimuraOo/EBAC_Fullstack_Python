import styled from 'styled-components'
import * as V from '../../utils/Variaveis'

export const EndContainer = styled.div`
  h3 {
    font-size: ${V.TxSize.G};
    line-height: ${V.lineHeight.G};
    font-weight: ${V.TxWeight.G};
    margin-bottom: 16px;
    margin-top: 24px;
  }

  p {
    font-size: ${V.TxSize.M};
    line-height: ${V.lineHeight.M};
    font-weight: ${V.TxWeight.M};
    margin-bottom: 8px;
  }

  button {
    margin-bottom: 8px;
  }
`
