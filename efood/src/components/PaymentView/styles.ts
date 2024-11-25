import styled from 'styled-components'
import * as V from '../../utils/Variaveis'

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
  }

  h3 {
    font-size: ${V.TxSize.G};
    line-height: ${V.lineHeight.G};
    font-weight: ${V.TxWeight.G};
    margin-bottom: 16px;
    margin-top: 24px;
  }

  button {
    margin-bottom: 8px;
  }
`

export const EtiquetasInput = styled.label`
  font-size: ${V.TxSize.M};
  line-height: ${V.lineHeight.M};
  font-weight: ${V.TxWeight.G};
  margin-bottom: 8px;
  margin-top: 8px;
`

export const InputArea = styled.input`
  background-color: ${V.Colors.Bege};
  color: ${V.Colors.Cinza};
  padding: 8px;
  border: none;

  &:focus {
    outline: none;
    border: none;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
    appearance: none;
    margin: 0;
  }
`

export const CvvVencimentoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  div {
    display: flex;
    flex-direction: column;
  }

  input {
    max-width: 155px;
    width: 100%;
    max-height: 34px;
    height: 100%;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      appearance: none;
      margin: 0;
    }

    &[type='number'] {
      -moz-appearance: textfield;
      appearance: none;
      margin: 0;
    }
  }
`
