import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import GlobalStyle, { Container } from './utils/Global_Styles'
import Footer from './components/Footer'
import Rotas from './routes/routes'
import { store } from './store'
import Cart from './components/SideBar'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Container>
          <Header />
        </Container>
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
