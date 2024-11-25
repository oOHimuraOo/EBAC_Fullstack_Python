import { useLocation } from 'react-router-dom'
import Banner from '../../components/Banner'
import RestaurantsList from '../../components/RestaurantsList/Index'
import { useEffect } from 'react'

const Home = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])

  return (
    <>
      <Banner banner="home" />
      <RestaurantsList section="Restaurantes" />
    </>
  )
}

export default Home
