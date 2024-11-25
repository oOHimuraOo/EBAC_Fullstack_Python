import logo from '../../assets/Images/logo.png'
import insta from '../../assets/Images/Redes/instagram-round-svgrepo-com (1) 1.png'
import face from '../../assets/Images/Redes/facebook-round-svgrepo-com 1.png'
import twit from '../../assets/Images/Redes/twitter-2-svgrepo-com 1.png'
import { FooterStyle, Middle, Redes, TextoFooter } from './styles'

const Footer = () => (
  <FooterStyle>
    <img src={logo} alt="Efood" />
    <Redes>
      <li>
        <a target="_blank" href="https://instagram.com" rel="noreferrer">
          <img src={insta} alt="Instagram" />
        </a>
      </li>
      <Middle>
        <a target="_blank" href="https://facebook.com" rel="noreferrer">
          <img src={face} alt="Facebook" />
        </a>
      </Middle>
      <li>
        <a target="_blank" href="https://twitter.com" rel="noreferrer">
          <img src={twit} alt="Twitter" />
        </a>
      </li>
    </Redes>
    <TextoFooter>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </TextoFooter>
  </FooterStyle>
)

export default Footer
