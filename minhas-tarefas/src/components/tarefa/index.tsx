import { ChangeEvent, useEffect, useState } from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { alteraStatus, remover } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'
import { BotaoSalvar, Botao } from '../../styles'
import { STATUS } from '../../utils/enums/tarefa'

type Props = TarefaClass

const Tarefa = ({
  idx,
  descricao: descricaoOrignal,
  prioridade,
  status,
  titulo
}: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')
  const [antigaDescricao, setAntigaDescricao] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    if (descricaoOrignal.length > 0) {
      setDescricao(descricaoOrignal)
    }
  }, [descricaoOrignal])

  function cancelarEdicao(): void {
    if (antigaDescricao.length > 0) {
      setDescricao(antigaDescricao)
    } else {
      setDescricao(descricaoOrignal)
    }
    setEstaEditando(false)
  }

  function iniciarEdicao(): void {
    setAntigaDescricao(descricao)
    setEstaEditando(true)
  }

  function alteraStatusTarefa(evento: ChangeEvent<HTMLInputElement>) {
    console.log(evento.target.checked)
    dispatch(alteraStatus({ idx, finalizado: evento.target.checked }))
  }
  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          id={titulo}
          checked={status === STATUS.CONCLUIDO}
          onChange={alteraStatusTarefa}
        />
        <S.Titulo>
          {estaEditando && <em>Editando: </em>}
          {titulo}
        </S.Titulo>
      </label>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        value={descricao}
        disabled={estaEditando ? false : true}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar onClick={() => setEstaEditando(false)}>
              Salvar
            </BotaoSalvar>
            <S.BotaoRemover
              onClick={() => {
                cancelarEdicao()
              }}
            >
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
    </S.Card>
  )
}

export default Tarefa
