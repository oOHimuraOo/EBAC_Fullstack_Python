import { LinkEstilo } from './styles'

export type Props = {
  color?: boolean
  children: string
  title: string
  to?: string
}

const Link = ({ color, children, title, to }: Props) => (
  <LinkEstilo color={color} title={title} to={to}>
    {children}
  </LinkEstilo>
)

export default Link
