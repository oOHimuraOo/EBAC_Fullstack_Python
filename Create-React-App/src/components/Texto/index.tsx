import { Texto as TextoEstilo } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
  fontSize?: number
  inBox?: boolean
}

const Texto = ({ children, tipo = 'principal', fontSize, inBox }: Props) => (
  <TextoEstilo tipo={tipo} fontSize={fontSize} inBox={inBox}>
    {children}
  </TextoEstilo>
)

export default Texto
