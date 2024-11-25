import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import RestaurantPage from '../pages/Restaurants'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/:restId" element={<RestaurantPage />} />
  </Routes>
)

export default Rotas
