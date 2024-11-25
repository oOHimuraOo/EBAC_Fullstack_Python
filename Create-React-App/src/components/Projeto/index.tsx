import Texto from '../Texto'
import Titulo from '../Title'
import { Botao, Card, ContainerDetails } from './styles'

const Projeto = () => (
  <Card>
    <Titulo inBox={true}>Projeto Nome</Titulo>
    <ContainerDetails>
      <img src="https://via.placeholder.com/50x50" alt="imagem do projeto" />
      <Texto tipo="secundario" inBox={true}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sed vero
        ipsum quam dolorum culpa reprehenderit fugiat non laborum.
      </Texto>
    </ContainerDetails>
    <Botao>Viste o projeto</Botao>
  </Card>
)

export default Projeto
