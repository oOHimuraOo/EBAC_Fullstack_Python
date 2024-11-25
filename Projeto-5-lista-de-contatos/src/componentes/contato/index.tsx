import { ChangeEvent, useEffect, useState } from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { alteraFavoritos, remover } from '../../armazen/redutores/contatos'
import ContatosClass from '../../modelos/Contato'
import { BotaoSalvar, Botao } from '../../estilos'
import { GRUPOS, FAVORITOS } from '../../utilidades/enumeracoes'
import {
  EstrelaContainer,
  EstrelaInput,
  EstrelaLabel
} from '../../container/formulario/styles'

type Props = ContatosClass

const Contato = ({
  idx,
  nome: nomeOriginal,
  telefone,
  email,
  endereco,
  grupos,
  favoritos
}: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  const [infos, setInfos] = useState({
    nome: nomeOriginal,
    telefone: telefone,
    email: email,
    endereco: endereco,
    grupos: grupos,
    favoritos: favoritos
  })
  const [antigaInfo, setAntigaInfo] = useState({
    nome: '',
    telefone: '',
    email: '',
    endereco: '',
    grupos: GRUPOS.NENHUM,
    favoritos: FAVORITOS.FALSO
  })
  const dispatch = useDispatch()

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setInfos((infAtual) => ({
        ...infAtual,
        nome: nomeOriginal
      }))
    }
  }, [nomeOriginal])

  function cancelarEdicao(): void {
    setInfos((infAtual) => ({
      ...infAtual,
      nome: antigaInfo.nome.length > 0 ? antigaInfo.nome : infAtual.nome,
      telefone:
        antigaInfo.telefone.length > 0
          ? antigaInfo.telefone
          : infAtual.telefone,
      email: antigaInfo.email.length > 0 ? antigaInfo.email : infAtual.email,
      endereco:
        antigaInfo.endereco.length > 0
          ? antigaInfo.endereco
          : infAtual.endereco,
      grupos:
        antigaInfo.grupos !== GRUPOS.NENHUM
          ? antigaInfo.grupos
          : infAtual.grupos,
      favoritos:
        antigaInfo.favoritos !== FAVORITOS.FALSO
          ? antigaInfo.favoritos
          : infAtual.favoritos
    }))

    setEstaEditando(false)
  }

  function iniciarEdicao(): void {
    setAntigaInfo(infos)
    setEstaEditando(true)
  }

  function converteResultado(valor: boolean): FAVORITOS {
    if (valor) {
      return FAVORITOS.VERDADEIRO
    }
    return FAVORITOS.FALSO
  }

  function alteraFavoritosContatos(evento: ChangeEvent<HTMLInputElement>) {
    setInfos((infosAtuais) => ({
      ...infosAtuais,
      favoritos: converteResultado(evento.target.checked)
    }))
    dispatch(
      alteraFavoritos({
        nome: infos.nome,
        favoritado: converteResultado(evento.target.checked)
      })
    )
  }

  return (
    <S.Cartao>
      <label htmlFor={nomeOriginal}>
        <EstrelaContainer>
          <EstrelaInput
            type="checkbox"
            id={nomeOriginal}
            checked={infos.favoritos === FAVORITOS.VERDADEIRO ? true : false}
            onChange={alteraFavoritosContatos}
          />
          <EstrelaLabel htmlFor={nomeOriginal} />
        </EstrelaContainer>
        <S.Titulo>
          {estaEditando && <em>Editando: </em>}
          {infos.nome}
        </S.Titulo>
      </label>
      <S.Tag parametro="grupos" grupos={infos.grupos}>
        {infos.grupos}
      </S.Tag>
      <S.Tag parametro="favoritos" favoritos={infos.favoritos}>
        {infos.favoritos === FAVORITOS.VERDADEIRO
          ? 'Favoritado'
          : 'Nao Favoritado'}
      </S.Tag>
      <S.InputTexto
        type="text"
        value={infos.telefone}
        disabled={estaEditando ? false : true}
        onChange={(e) =>
          setInfos((infosAtuais) => ({
            ...infosAtuais,
            telefone: e.target.value
          }))
        }
      />
      <S.InputTexto
        type="text"
        value={infos.endereco}
        disabled={estaEditando ? false : true}
        onChange={(e) =>
          setInfos((infosAtuais) => ({
            ...infosAtuais,
            endereco: e.target.value
          }))
        }
      />
      <S.InputTexto
        type="text"
        value={infos.email}
        disabled={estaEditando ? false : true}
        onChange={(e) =>
          setInfos((infosAtuais) => ({
            ...infosAtuais,
            email: e.target.value
          }))
        }
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar onClick={() => setEstaEditando(false)}>
              {' '}
              Salvar
            </BotaoSalvar>
            <S.BotaoRemover onClick={() => cancelarEdicao()}>
              Cancelar
            </S.BotaoRemover>
          </>
        ) : (
          <>
            <Botao
              onClick={() => {
                iniciarEdicao()
              }}
            >
              Editar
            </Botao>
            <S.BotaoRemover onClick={() => dispatch(remover(idx))}>
              Remover
            </S.BotaoRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Cartao>
  )
}

export default Contato
