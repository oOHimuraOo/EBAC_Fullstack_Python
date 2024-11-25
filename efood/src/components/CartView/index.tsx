import { converterFormatacaoDePreco } from '../../utils/Converter'
import { BotaoEstilo } from '../Button/styles'
import CarrinhoItem from '../CartItem'
import { ListaDeCompras, Total } from './styles'
import { food } from '../../utils/Converter'
import { useDispatch, useSelector } from 'react-redux'
import { rootReducer } from '../../store'
import { ChangeCheckoutRender } from '../../store/reducers/carrinho'

const CartView = () => {
  const { itens } = useSelector((state: rootReducer) => state.carrinho)
  const dispatch = useDispatch()

  function retornaValorPratos(food: food) {
    const novoValor = parseFloat(food.price) * retornaQuantidade(food)
    return novoValor
  }

  function retornaQuantidade(food: food): number {
    let quantidade = 0
    itens.forEach((item) => {
      if (item.id === food.id) {
        quantidade = item.qtd
      }
    })
    return quantidade
  }

  function retornaTotal() {
    let valor = 0
    itens.forEach((item) => {
      valor += retornaValorPratos(item)
    })

    return valor
  }

  const modificaCheckoutRendering = () => {
    if (itens.length > 0) {
      dispatch(ChangeCheckoutRender(1))
    } else {
      alert('Seu carrinho está vazio.')
    }
  }

  return (
    <>
      <ListaDeCompras>
        {itens.map((item) => (
          <CarrinhoItem
            food={item}
            key={item.id}
            quantidade={retornaQuantidade(item)}
            valorPratos={retornaValorPratos(item)}
          />
        ))}
      </ListaDeCompras>
      <Total>
        <b>Valor totoal:</b>
        <span>{converterFormatacaoDePreco(retornaTotal())}</span>
      </Total>
      <BotaoEstilo onClick={modificaCheckoutRendering}>
        Continuar com a entrega
      </BotaoEstilo>
    </>
  )
}

export default CartView
