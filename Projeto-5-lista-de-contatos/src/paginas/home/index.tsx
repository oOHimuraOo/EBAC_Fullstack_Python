import BotaoAdicionar from '../../componentes/adicionar'
import ListaDeContatos from '../../container/lista_de_contatos'
import BarraLateral from '../../container/barra_lateral'

const Home = () => (
  <>
    <BarraLateral mostraFiltros={true} />
    <ListaDeContatos />
    <BotaoAdicionar />
  </>
)

export default Home
