import { useEffect, useState } from "react"
import Perfil from "./components/Perfil"
import InfosPerfil from "./components/Perfil_info"
import ReposList from "./components/Repos_list"

function App() {
  const [userInfo, setInfos] = useState([])
  const usuario = 'oOHimuraOo'
  const apiURL = `https://api.github.com/users/${usuario}`
  
    
    useEffect(() => {
        fetch(apiURL).then(res => res.json()).then(resJson => {
            setInfos(resJson)
        })
    }, [apiURL])


  return (
    <div className="container">
      <Perfil nome={userInfo.name} avatar={userInfo.avatar_url} usuario={userInfo.login}/>
      <InfosPerfil seguidores={userInfo.followers} repos={userInfo.public_repos} seguindo={userInfo.following} />
      <ReposList url={userInfo.repos_url} />
      {/* <Formulario /> */}
    </div>
  )
}

export default App
