import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { PRIORIDADE, STATUS } from '../../utils/enums/tarefa'
import { Botao } from '../../styles'

type TagProps = {
  prioridade?: PRIORIDADE
  status?: STATUS
  parametro: 'status' | 'prioridade'
}

function corDeFundoDecider(props: TagProps): string {
  if (props.parametro === 'status') {
    if (props.status === STATUS.CONCLUIDO) return variaveis.verde
    if (props.status === STATUS.PENDENTE) return variaveis.amareloPendente
  } else {
    if (props.prioridade === PRIORIDADE.IMPORTANTE)
      return variaveis.amareloImportante
    if (props.prioridade === PRIORIDADE.URGENTE) return variaveis.vermelho
    if (props.prioridade === PRIORIDADE.NORMAL) return variaveis.azul
  }
  return variaveis.azul
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  border-radius: 16px;
  margin: 32px;
  border: 1px solid #8b8b8b;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-left: 8px;
`
export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  border-radius: 8px;
  font-weight: bold;
  color: #fff;
  font-size: 10px;
  background-color: ${(props) => corDeFundoDecider(props)};
  border-radius: 16px;
  margin-right: 16px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-top: 16px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  height: 75px;
  resize: none;
  background-color: transparent;

  &:focus {
    background-color: rgba(243, 243, 243, 0.25);
  }
`
export const BarraAcoes = styled.div`
  padding: 8px;
  padding-top: 16px;
`

export const BotaoRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
