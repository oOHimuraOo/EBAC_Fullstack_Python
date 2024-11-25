import * as S from './styles'
import lixeira from '../../assets/Images/Icons/lixeira-de-reciclagem 1.png'
import * as C from '../../utils/Converter'
import { useGetRestaurantsQuery } from '../../services/api'
import RestaurantClass from '../../utils/models/restaurants'
import { food } from '../../utils/Converter'
import { useDispatch } from 'react-redux'
import { add, reduce, remove } from '../../store/reducers/carrinho'

type Props = {
  food: food
  quantidade: number
  valorPratos: number
}

const CarrinhoItem = ({ food, quantidade, valorPratos }: Props) => {
  const { data } = useGetRestaurantsQuery()
  const dispatch = useDispatch()

  function recuperarNomeRestaurante(): string {
    if (data === undefined) {
      return ''
    }

    const restaurants: RestaurantClass[] = C.converterModel2(data)
    const match = food.link.match(/\/(\d+)\//)
    if (match) {
      return restaurants[parseInt(match[1])].name
    }
    return ''
  }

  const adicionarCarrinho = () => {
    dispatch(add(C.FoodToObject(food)))
  }

  const reduzirItemCarrinho = () => {
    dispatch(reduce(C.FoodToObject(food)))
  }

  const removerDoCarrinho = () => {
    const remover = confirm(
      `Você deseja remover TODOS os ${food.name} do carrinho?`
    )
    if (remover) {
      dispatch(remove(C.FoodToObject(food)))
    }
  }

  return (
    <S.Item>
      <img src={food.image} alt={food.name} />
      <S.InfoContainer>
        <h3>{food.name}</h3>
        <h4>{recuperarNomeRestaurante()}</h4>
        <S.PrecoQuantidadeContainer>
          <span>
            {C.converterFormatacaoDePreco(valorPratos)} |
            <S.PrecoUnitario>
              {C.converterFormatacaoDePreco(food.price)}
            </S.PrecoUnitario>
          </span>
          <S.Alinhador>
            <a onClick={reduzirItemCarrinho}>-</a>
            <S.Quantidade>{quantidade}</S.Quantidade>
            <a onClick={adicionarCarrinho}>+</a>
            <a onClick={removerDoCarrinho}>
              <img src={lixeira} alt="lixeira" />
            </a>
          </S.Alinhador>
        </S.PrecoQuantidadeContainer>
      </S.InfoContainer>
    </S.Item>
  )
}

export default CarrinhoItem
