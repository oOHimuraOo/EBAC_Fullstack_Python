import { useSelector } from 'react-redux'
import Contato from '../../componentes/contato'
import { MainContainer, Titulo } from '../../estilos'
import { EstadoRaiz } from '../../armazen'
import { useEffect, useState } from 'react'
import { FAVORITOS, GRUPOS } from '../../utilidades/enumeracoes'

const ListaDeContatos = () => {
  const [mostrarTitulo, setMostrarTitulo] = useState(false)
  const { itens } = useSelector((state: EstadoRaiz) => state.contato)
  const { termo, criterio, valor } = useSelector(
    (state: EstadoRaiz) => state.filtro
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarTitulo(true)
    }, 5000)
    setMostrarTitulo(false)
    return () => clearTimeout(timer)
  }, [termo, criterio, valor])

  const filtrarContatos = () => {
    let contatosFiltrados = itens

    if (termo) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )
    }

    if (criterio === 'grupos') {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.grupos === valor
      )
    } else if (criterio === 'nenhum') {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.grupos === GRUPOS.NENHUM
      )
    } else if (criterio === 'favoritados') {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.favoritos === FAVORITOS.VERDADEIRO
      )
    }

    return contatosFiltrados
  }

  const contatos = filtrarContatos()

  const renderizarTextoCriterio = () => {
    if (criterio === 'todos') {
      return false
    }
    return true
  }

  const renderizarTextoTermo = () => {
    if (termo !== undefined && termo.length > 0) {
      return true
    }
    return false
  }

  const renderizaTexto = () => {
    let texto = `Exibindo: ${contatos.length} contato(s) marcado(s) como: `

    if (renderizarTextoCriterio() && renderizarTextoTermo()) {
      texto = texto + `"${criterio}: ${valor}" e "termo: ${termo}".`
    } else if (!renderizarTextoCriterio() && renderizarTextoTermo()) {
      texto = texto + `"termo: ${termo}`
    } else if (renderizarTextoCriterio() && !renderizarTextoTermo()) {
      texto = texto + `"${criterio}: ${valor}".`
    } else {
      texto = `Exibindo: ${contatos.length} contato(s).`
    }

    if (criterio === 'favoritados') {
      texto = `Exibindo: ${contatos.length} contato(s) marcado(s) como: "Favorito".`
    }

    return texto
  }

  return (
    <MainContainer>
      {mostrarTitulo ? '' : <Titulo as="p">{renderizaTexto()}</Titulo>}
      <ul>
        {contatos.map((c) => (
          <li key={c.idx}>
            <Contato
              idx={c.idx}
              nome={c.nome}
              telefone={c.telefone}
              endereco={c.endereco}
              email={c.email}
              grupos={c.grupos}
              favoritos={c.favoritos}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
