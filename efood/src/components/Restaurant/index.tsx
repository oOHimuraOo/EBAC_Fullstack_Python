import Link from '../Link'
import Tag from '../Tag'
import * as S from './styles'
import estrela from '../../assets/Images/Icons/estrela.png'

type Props = {
  image: string
  name: string
  news: string
  style: string
  score: string
  description: string
  linkTitle: string
  link: string
}

const Restaurant = ({
  image,
  name,
  news,
  style,
  score,
  description,
  linkTitle,
  link
}: Props) => (
  <div>
    <S.ImagemContainer>
      <S.Imagem src={image} alt="" />
      <S.Positioner>
        {news !== '' && <Tag>{news}</Tag>}
        {style !== '' && <Tag>{style}</Tag>}
      </S.Positioner>
    </S.ImagemContainer>
    <S.Card>
      <div>
        <S.Titulo>{name}</S.Titulo>
        <S.NotaContainer>
          <S.Nota>{score}</S.Nota>
          <S.Estrela src={estrela} alt="" />
        </S.NotaContainer>
      </div>
      <S.Texto>{description}</S.Texto>
      <Link title={linkTitle} to={link}>
        {linkTitle}
      </Link>
    </S.Card>
  </div>
)

export default Restaurant
