import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 80vh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 40px;
  display: block;
  font-size: 18px;
`

export const Campo = styled.input`
  border-radius: 8px;
  border: 1px solid #666;
  background-color: #fff;
  font-weight: bold;
  color: #666;
  padding: 8px;
  width: 100%;
`

export const Botao = styled.button`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  background-color: #2f3640;
  margin-right: 8px;
  cursor: pointer;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
