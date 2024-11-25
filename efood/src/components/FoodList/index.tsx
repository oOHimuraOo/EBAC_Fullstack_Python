import FoodClass from '../../utils/models/food'
import { Container } from '../../utils/Global_Styles'
import { Food } from '../Food'
import * as S from './styles'

type Props = {
  section: string
  foods: FoodClass[]
}

const FoodList = ({ section, foods }: Props) => {
  return (
    <S.FoodsContainer id={section}>
      <Container>
        <h2>{section}</h2>
        <S.FoodList>
          {foods.map((food) => (
            <li key={food.id}>
              <Food food={food} />
            </li>
          ))}
        </S.FoodList>
      </Container>
    </S.FoodsContainer>
  )
}
export default FoodList
