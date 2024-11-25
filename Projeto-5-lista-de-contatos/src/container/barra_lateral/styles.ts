import styled from 'styled-components'
import { Cores } from '../../utilidades/variaveis'

export const Lateral = styled.aside`
  padding: 16px;
  background-color: ${Cores.PlanoDeFundoSecundario};
  height: 100vh;
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`
