import styled, { createGlobalStyle } from 'styled-components'
import { Cores } from '../utilidades/variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    list-style: none;

    body {
      background-color: ${Cores.PlanoDefundoPrimario}
    }
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
  border: 2px solid ${Cores.InputBorda};
  background-color: ${Cores.InputPlanoDeFundo};
  font-weight: bold;
  color: ${Cores.InputTexto};
  padding: 8px;
  width: 100%;
`

export const Botao = styled.button`
  font-size: 16px;
  color: ${Cores.CorTextoBotao};
  font-weight: bold;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  background-color: ${Cores.BotaoPlanoDeFundo};
  margin-right: 8px;
  cursor: pointer;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${Cores.BotaoSalvar};
`

export default EstiloGlobal
