import styled from 'styled-components'
import { Cores } from '../../utilidades/variaveis'
import { GRUPOS, FAVORITOS } from '../../utilidades/enumeracoes'
import { Botao } from '../../estilos'

type TagProps = {
  grupos?: GRUPOS
  favoritos?: FAVORITOS
  parametro: 'grupos' | 'favoritos'
}

function corDeFundoDecider(props: TagProps): string {
  if (props.parametro === 'favoritos') {
    if (props.favoritos === FAVORITOS.VERDADEIRO)
      return Cores.FavoritosVerdadeiro
    if (props.favoritos === FAVORITOS.FALSO) return Cores.FavoritosFalso
  } else {
    if (props.grupos === GRUPOS.AMIGOS) return Cores.GruposAmigos
    if (props.grupos === GRUPOS.FAMILIA) return Cores.GruposFamilia
    if (props.grupos === GRUPOS.TRABALHO) return Cores.GruposTrabalho
    if (props.grupos === GRUPOS.NENHUM) return Cores.GruposNenhum
  }
  return Cores.Error
}

export const Cartao = styled.div`
  background-color: ${Cores.CartaoPlanoDeFundo};
  box-shadow: 0px 4px 4px ${Cores.CartaoSombra};
  padding: 16px;
  margin: 32px;
  border: 2px solid ${Cores.CartaoBorda};

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
  border-radius: 16px;
  font-weight: bold;
  color: ${Cores.TagTexto};
  font-size: 10px;
  background-color: ${(props) => corDeFundoDecider(props)};
  margin-right: 16px;
  display: inline-block;
`

export const InputTexto = styled.input`
  color: ${Cores.InputTexto};
  font-size: 14px;
  font-family: monospace;
  display: block;
  width: 100%;
  margin-top: 16px;
  border: none;
  box-shadow: 0 4px 4px ${Cores.InputShadow};

  &:focus {
    background-color: ${Cores.InputFocus};
  }
`

export const BarraAcoes = styled.div`
  padding: 8px;
  padding-top: 16px;
`

export const BotaoRemover = styled(Botao)`
  background-color: ${Cores.BotaoRemover};
`
