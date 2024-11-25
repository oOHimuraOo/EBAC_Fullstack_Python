import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { rootReducer } from '../../store'
import { close } from '../../store/reducers/carrinho'
import CartView from '../CartView'
import DeliveryView from '../DeliveryView'
import PaymentView from '../PaymentView'
import EndView from '../EndVIew'

const Cart = () => {
  const { is_open, is_rendering } = useSelector(
    (state: rootReducer) => state.carrinho
  )
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  function renderizaPagina() {
    if (is_rendering === 0) {
      return <CartView />
    } else if (is_rendering === 1) {
      return <DeliveryView />
    } else if (is_rendering === 2) {
      return <PaymentView />
    } else if (is_rendering === 3) {
      return <EndView />
    }
  }

  return (
    <S.CartContainer className={is_open ? 'is_open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>{renderizaPagina()}</S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
