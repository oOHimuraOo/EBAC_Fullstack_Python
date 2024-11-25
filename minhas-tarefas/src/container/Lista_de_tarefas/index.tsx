import { useSelector } from 'react-redux'
import Tarefa from '../../components/tarefa'
import { MainContainer, Titulo } from '../../styles'
import { RootReducer } from '../../store'
import { useEffect, useState } from 'react'

const ListaDeTarefa = () => {
  const [mostrarTitulo, setMostrarTitulo] = useState(false)
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarTitulo(true)
    }, 15000)
    setMostrarTitulo(false)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [termo, criterio, valor])

  const filtraTarefas = () => {
    let tarefasFiltradas = itens

    if (termo) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )
    }

    if (criterio === 'prioridade') {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.prioridade === valor
      )
    } else if (criterio === 'status') {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.status === valor
      )
    }

    return tarefasFiltradas
  }

  const renderizaTextoCriterio = () => {
    if (criterio === 'todas') {
      return false
    }
    return true
  }

  const renderizaTextoTermo = () => {
    if (termo !== undefined && termo.length > 0) {
      return true
    }
    return false
  }

  const tarefas = filtraTarefas()

  const renderizaTexto = () => {
    var texto = `Exibindo: ${tarefas.length} tarefa(s) marcada(s) como: `

    if (renderizaTextoCriterio() && renderizaTextoTermo()) {
      texto = texto + `"${criterio}: ${valor}" e "termo: ${termo}".`
    } else if (!renderizaTextoCriterio() && renderizaTextoTermo()) {
      texto = texto + `"termo: ${termo}".`
    } else if (renderizaTextoCriterio() && !renderizaTextoTermo()) {
      texto = texto + `"${criterio} = ${valor}".`
    } else {
      texto = `Exibindo: ${tarefas.length} tarefa(s).`
    }
    return texto
  }

  return (
    <MainContainer>
      {mostrarTitulo ? '' : <Titulo as="p">{renderizaTexto()}</Titulo>}
      <ul>
        {tarefas.map((t) => (
          <li key={t.idx}>
            <Tarefa
              idx={t.idx}
              descricao={t.descricao}
              titulo={t.titulo}
              prioridade={t.prioridade}
              status={t.status}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeTarefa
