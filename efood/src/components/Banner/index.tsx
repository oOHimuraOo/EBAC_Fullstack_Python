import * as S from './styles'
import texture from '../../assets/Images/texture.png'
import logo from '../../assets/Images/logo.png'
import { Container } from '../../utils/Global_Styles'
import logoInvisivel from '../../assets/Images/Restaurantes/Logo_Invisivel.png'
type props = {
  banner: 'home' | 'restaurant'
  imagemRestaurante?: string
  logoRestaurante?: string
  nomeRestaurante?: string
  estiloRestaurante?: string
}

const Banner = ({
  banner,
  imagemRestaurante,
  logoRestaurante,
  nomeRestaurante,
  estiloRestaurante
}: props) => {
  return banner === 'home' ? (
    <S.Imagem style={{ backgroundImage: `url(${texture})` }}>
      <Container>
        <S.LogoEstilo src={logo} alt="Efood" />
        <S.FraseDestaque>
          Viva experiências gastronômicas no conforto da sua casa
        </S.FraseDestaque>
      </Container>
    </S.Imagem>
  ) : (
    <S.BannerImagem style={{ backgroundImage: `url(${imagemRestaurante})` }}>
      <Container>
        <S.EstiloRestaurante>{estiloRestaurante}</S.EstiloRestaurante>
        {logoRestaurante === '' ? (
          <S.LogoRestaurante src={logoInvisivel} alt={''} />
        ) : (
          <S.LogoRestaurante src={logoRestaurante} alt={logoRestaurante} />
        )}
        <S.NomeRestaurante>{nomeRestaurante}</S.NomeRestaurante>
      </Container>
    </S.BannerImagem>
  )
}

export default Banner
