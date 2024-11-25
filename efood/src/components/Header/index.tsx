import * as S from './styles'
import logo from '../../assets/Images/Icons/Logo.png'
import carrinho from '../../assets/Images/Icons/shopping-cart 1.svg'
import { Link } from 'react-router-dom'
import { open } from '../../store/reducers/carrinho'
import { useDispatch, useSelector } from 'react-redux'
import { rootReducer } from '../../store'

const Header = () => {
  const { itens } = useSelector((state: rootReducer) => state.carrinho)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  function QuantidadeTotalDeItens() {
    let quantidade = 0
    itens.forEach((item) => {
      quantidade += item.qtd
    })
    return quantidade
  }
  return (
    <S.HeaderBg>
      <S.HeaderBar>
        <div>
          <Link to="/">
            <S.LogoEstilo src={logo} alt="Efood" />
          </Link>
          <nav>
            <S.Links>
              <S.LinkItem>
                <Link to="/#Restaurantes">Restaurantes</Link>
              </S.LinkItem>
              <S.LinkItem>
                <a href="/#">Mais Pedidos</a>
              </S.LinkItem>
              <S.LinkItem>
                <a href="#promocoes">Promoções</a>
              </S.LinkItem>
            </S.Links>
          </nav>
        </div>
        <div>
          <S.LinkCarrinho onClick={openCart}>
            {QuantidadeTotalDeItens()} - produto(s)
            <S.CarrinhoEstilo src={carrinho} alt="Carrinho de compras" />
          </S.LinkCarrinho>
        </div>
      </S.HeaderBar>
    </S.HeaderBg>
  )
}

export default Header
