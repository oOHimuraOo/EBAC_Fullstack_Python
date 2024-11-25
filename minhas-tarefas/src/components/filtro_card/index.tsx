import { useDispatch, useSelector } from 'react-redux'
import { Card, Contador, Etiqueta } from './styles'
import { alteraFiltro } from '../../store/reducers/filtro'
import { PRIORIDADE, STATUS } from '../../utils/enums/tarefa'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: STATUS | PRIORIDADE
}
 
const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)

  const filtrar = () => {
    dispatch(
      alteraFiltro({
        criterio,
        valor
      })
    )
  }

  const VerificaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contaTarefas = () => {
    if (criterio === 'todas') return tarefas.itens.length
    if (criterio === 'prioridade') {
      return tarefas.itens.filter((item) => item.prioridade === valor).length
    }
    if (criterio === 'status') {
      return tarefas.itens.filter((item) => item.status === valor).length
    }
  }

  const ativo = VerificaAtivo()
  const contador = contaTarefas()

  return (
    <Card ativo={ativo} onClick={filtrar}>
      <Contador>{contador}</Contador>
      <Etiqueta>{legenda}</Etiqueta>
    </Card>
  )
}

export default FiltroCard
