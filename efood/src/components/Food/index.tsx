import { useState } from 'react'
import Tag from '../Tag'
import * as S from './styles'
import close from '../../assets/Images/Icons/close 1.png'
import { useDispatch, useSelector } from 'react-redux'
import { add, ChangeCheckoutRender, open } from '../../store/reducers/carrinho'
import FoodClass from '../../utils/models/food'
import { converterFormatacaoDePreco, FoodToObject } from '../../utils/Converter'
import { rootReducer } from '../../store'

type Props = {
  food: FoodClass
}

export const Food = ({ food }: Props) => {
  const { is_rendering } = useSelector((state: rootReducer) => state.carrinho)
  const [modalAberto, setModalAberto] = useState(false)
  const closeModal = () => setModalAberto(false)
  const dispatch = useDispatch()

  const AdicionarCarrinho = () => {
    if (is_rendering != 0) {
      dispatch(ChangeCheckoutRender(0))
    }
    dispatch(add(FoodToObject(food)))
    dispatch(open())
  }

  return (
    <>
      <S.FoodCardContainer>
        <S.FoodImageContainer>
          <S.FoodImage src={food.image} alt="" />
          <S.Positioner>
            {food.news !== '' && <Tag>{food.news}</Tag>}
            {food.promocao !== '' && <Tag>{food.promocao}</Tag>}
          </S.Positioner>
        </S.FoodImageContainer>
        <S.FoodTitleContainer>
          <S.FoodTitle>{food.name}</S.FoodTitle>
          <S.FoodPrice>{converterFormatacaoDePreco(food.price)}</S.FoodPrice>
        </S.FoodTitleContainer>
        <S.FoodText>{food.description}</S.FoodText>
        <S.FoodButton type="button" onClick={() => setModalAberto(true)}>
          Mais detalhes
        </S.FoodButton>
      </S.FoodCardContainer>
      <S.ModalContainer className={modalAberto ? 'visivel' : ''}>
        <S.ModalBackground>
          <S.ModalImage src={food.image} alt={food.name} />
          <S.ModaltDescriptionContainer>
            <div>
              <h3>{food.name}</h3>
              <p>{food.description}</p>
              <h4>
                <b>Serve: </b>
                {food.size}
              </h4>
            </div>
            <S.ModalBotao onClick={AdicionarCarrinho}>
              adicionar ao carrinho - {converterFormatacaoDePreco(food.price)}
            </S.ModalBotao>
          </S.ModaltDescriptionContainer>
          <S.Modallink onClick={closeModal}>
            <img src={close} alt="Fechar" />
          </S.Modallink>
        </S.ModalBackground>
        <S.Overlay onClick={closeModal}></S.Overlay>
      </S.ModalContainer>
    </>
  )
}
