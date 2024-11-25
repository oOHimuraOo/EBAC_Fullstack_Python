import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Cores } from '../../utilidades/variaveis'

export const Adcionar = styled(Link)`
  border-radius: 50%;
  background-color: ${Cores.BotaoAdd};
  color: ${Cores.CorTextoBotao};
  height: 64px;
  width: 64px;
  position: fixed;
  bottom: 40px;
  right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-decoration: none;
`
