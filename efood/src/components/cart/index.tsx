import { useDispatch, useSelector } from 'react-redux'
import { BotaoEstilo } from '../Button/styles'
import CarrinhoItem from '../CartItem'
import * as S from './styles'
import { rootReducer } from '../../store'
import { close } from '../../store/reducers/carrinho'
import food from '../../utils/models/food'
import { converterFormatacaoDePreco } from '../../utils/Converter'

const Cart = () => {
  const { is_open, itens } = useSelector((state: rootReducer) => state.carrinho)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

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

  return (
    <S.CartContainer className={is_open ? 'is_open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        <S.ListaDeCompras>
          {itens.map((item) => (
            <CarrinhoItem
              food={item}
              key={item.id}
              quantidade={retornaQuantidade(item)}
              valorPratos={retornaValorPratos(item)}
            />
          ))}
        </S.ListaDeCompras>
        <S.Total>
          <b>Valor totoal:</b>
          <span>{converterFormatacaoDePreco(retornaTotal())}</span>
        </S.Total>
        <BotaoEstilo>Continuar com a entrega</BotaoEstilo>
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
