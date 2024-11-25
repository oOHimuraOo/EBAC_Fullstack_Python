import { useDispatch, useSelector } from 'react-redux'
import CartaoFiltro from '../../componentes/cartao_filtro'
import { Filtros, Lateral } from './styles'
import { EstadoRaiz } from '../../armazen'
import { alteraTermo } from '../../armazen/redutores/filtro'
import { GRUPOS } from '../../utilidades/enumeracoes'
import { Botao, Campo } from '../../estilos'
import { useNavigate } from 'react-router-dom'

type Props = {
  mostraFiltros: boolean
}

const BarraLateral = ({ mostraFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: EstadoRaiz) => state.filtro)

  return (
    <Lateral>
      <div>
        {mostraFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(e) => dispatch(alteraTermo(e.target.value))}
            />
            <Filtros>
              <CartaoFiltro
                valor={GRUPOS.AMIGOS}
                criterio="grupos"
                legenda="Amigos"
              />
              <CartaoFiltro
                valor={GRUPOS.FAMILIA}
                criterio="grupos"
                legenda="Familia"
              />
              <CartaoFiltro
                valor={GRUPOS.TRABALHO}
                criterio="grupos"
                legenda="Trabalho"
              />
              <CartaoFiltro
                valor={GRUPOS.NENHUM}
                criterio="nenhum"
                legenda="Nenhum"
              />
              <CartaoFiltro criterio="todos" legenda="Todos" />
              <CartaoFiltro criterio="favoritados" legenda="Favoritados" />
            </Filtros>
          </>
        ) : (
          <>
            <Botao type="button" onClick={() => navigate('/')}>
              Voltar a lista de contatos
            </Botao>
          </>
        )}
      </div>
    </Lateral>
  )
}

export default BarraLateral
