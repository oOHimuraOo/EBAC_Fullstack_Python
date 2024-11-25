import { alteraFiltro } from '../../armazen/redutores/filtro'
import { FAVORITOS, GRUPOS } from '../../utilidades/enumeracoes'
import { EstadoRaiz } from '../../armazen'
import { useDispatch, useSelector } from 'react-redux'
import { Cartao, Contador, Etiqueta } from './styles'

export type Props = {
  legenda: string
  criterio: 'grupos' | 'todos' | 'nenhum' | 'favoritados'
  valor?: GRUPOS
}

const CartaoFiltro = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, contato } = useSelector((state: EstadoRaiz) => state)

  const filtrar = () => {
    dispatch(alteraFiltro({ criterio, valor }))
  }

  const VerificaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contaContatos = () => {
    if (criterio === 'todos') return contato.itens.length
    if (criterio === 'nenhum')
      return contato.itens.filter((item) => item.grupos === GRUPOS.NENHUM)
        .length
    if (criterio === 'grupos')
      return contato.itens.filter((item) => item.grupos === valor).length
    if (criterio === 'favoritados')
      return contato.itens.filter(
        (item) => item.favoritos === FAVORITOS.VERDADEIRO
      ).length
  }

  const ativo = VerificaAtivo()
  const contador = contaContatos()

  return (
    <Cartao ativo={ativo} onClick={filtrar}>
      <Contador>{contador}</Contador>
      <Etiqueta>{legenda}</Etiqueta>
    </Cartao>
  )
}

export default CartaoFiltro
