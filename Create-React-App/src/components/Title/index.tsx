import { Titulo as TituloEstilo } from './styles'

export type Props = {
  children: string
  fontSize?: number
  inBox?: boolean
}

const Titulo = (props: Props) => (
  <TituloEstilo fontSize={props.fontSize} inBox={props.inBox}>
    {props.children}
  </TituloEstilo>
)

export default Titulo
