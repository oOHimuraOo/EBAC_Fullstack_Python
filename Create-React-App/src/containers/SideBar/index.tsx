import Avatar from '../../components/Avatar'
import Texto from '../../components/Texto'
import Titulo from '../../components/Title'
import { Botao, Descricao, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Felipe Cerqueira</Titulo>
      <Texto tipo="secundario" fontSize={16}>
        oOHimuraOo
      </Texto>
      <Descricao fontSize={12} tipo="principal">
        GameDev
      </Descricao>
      <Botao onClick={props.trocaTema}>Trocar Tema</Botao>
    </SidebarContainer>
  </aside>
)

export default Sidebar
