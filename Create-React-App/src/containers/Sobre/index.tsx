import Texto from '../../components/Texto'
import Titulo from '../../components/Title'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Texto>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magnam
      reprehenderit eius culpa repudiandae provident tempore. Assumenda quidem
      facere impedit possimus delectus, temporibus beatae sunt in, nobis ea
      tempora molestias!
    </Texto>
    <GithubSecao>
      <img
        src="https://github-readme-stats.vercel.app/api?username=oOHimuraOo&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
        alt="github Stats"
      />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=oOHimuraOo&layout=compact&langs_count=7&theme=dracula"
        alt="github Languages"
      />
    </GithubSecao>
  </section>
)

export default Sobre
