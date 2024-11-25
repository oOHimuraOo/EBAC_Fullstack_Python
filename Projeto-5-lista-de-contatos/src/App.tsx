import { Provider } from 'react-redux'
import armazen from './armazen'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './paginas/home'
import Cadastro from './paginas/cadastro'
import EstiloGlobal, { Container } from './estilos'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={armazen}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
