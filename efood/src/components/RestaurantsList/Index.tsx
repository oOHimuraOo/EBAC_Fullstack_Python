import RestaurantClass from '../../utils/models/restaurants'
import { Container } from '../../utils/Global_Styles'
import Restaurant from '../Restaurant'
import { List, RestaurantsContainer } from './styles'
import { converterModel2 } from '../../utils/Converter'
import { useGetRestaurantsQuery } from '../../services/api'

type Props = {
  section: string
}

const RestaurantsList = ({ section }: Props) => {
  const { data, isLoading } = useGetRestaurantsQuery()

  // const [restaurants, setRestaurants] = useState<RestaurantClass[]>([])

  // useEffect(() => {
  //   const fetchRestaurants = async () => {
  //     const data = await converterValores()
  //     setRestaurants(data)
  //   }
  //   fetchRestaurants()
  // }, [])

  if (isLoading || data === undefined) {
    return <h3 id="Restuarantes">Carregando...</h3>
  }

  const restaurants: RestaurantClass[] = converterModel2(data)

  return (
    <RestaurantsContainer id={section}>
      <Container>
        <h2>{section}</h2>
        <List>
          {restaurants.map((rest) => (
            <li key={rest.id}>
              <Restaurant
                image={rest.image}
                style={rest.style}
                news={rest.news}
                name={rest.name}
                score={rest.score}
                link={`${rest.link}#Comidas`}
                linkTitle={rest.linkTitle}
                description={rest.description}
              />
            </li>
          ))}
        </List>
      </Container>
    </RestaurantsContainer>
  )
}
export default RestaurantsList
