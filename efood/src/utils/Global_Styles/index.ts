import styled, { createGlobalStyle } from 'styled-components'
import * as V from '../Variaveis'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${V.Colors.Bege};
    color: ${V.Colors.Vermelho};
  }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

export default GlobalStyle
