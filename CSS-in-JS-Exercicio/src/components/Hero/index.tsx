import { Container } from '../../styles'
import { Hero as HeroStyle, HeroTitle } from './styles'
//import styles from './Hero.module.css'

const Hero = () => (
  <HeroStyle>
    <Container>
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </Container>
  </HeroStyle>
)

export default Hero
