import BotaoAdcionar from '../../components/Add'
import ListaDeTarefa from '../../container/Lista_de_tarefas'
import BarraLateral from '../../container/side_bar'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros={true} />
    <ListaDeTarefa />
    <BotaoAdcionar />
  </>
)

export default Home
