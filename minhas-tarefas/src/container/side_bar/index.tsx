import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/filtro_card'
import { Filtros, Lateral } from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import { PRIORIDADE, STATUS } from '../../utils/enums/tarefa'
import { Botao, Campo } from '../../styles'
import { useNavigate } from 'react-router-dom'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <Lateral>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
            />
            <Filtros>
              <FiltroCard
                valor={PRIORIDADE.URGENTE}
                criterio="prioridade"
                legenda="Urgentes"
              />
              <FiltroCard
                valor={PRIORIDADE.IMPORTANTE}
                criterio="prioridade"
                legenda="Importantes"
              />
              <FiltroCard
                valor={PRIORIDADE.NORMAL}
                criterio="prioridade"
                legenda="Normal"
              />
              <FiltroCard
                valor={STATUS.PENDENTE}
                criterio="status"
                legenda="Pendentes"
              />
              <FiltroCard
                valor={STATUS.CONCLUIDO}
                criterio="status"
                legenda="Concluidas"
              />
              <FiltroCard criterio="todas" legenda="Todas" />
            </Filtros>
          </>
        ) : (
          <>
            <Botao type="button" onClick={() => navigate('/')}>
              Voltar a lista de tarefas
            </Botao>
          </>
        )}
      </div>
    </Lateral>
  )
}

export default BarraLateral
