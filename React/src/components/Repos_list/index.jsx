import styles from './RepoList.module.css'
import { useState } from "react"

const ReposList = (url) => {
    const [userRepos, setRepos] = useState([])
    const apiURL = url.url
    console.log(apiURL)

    if (apiURL) {
        fetch(apiURL).then(res => res.json()).then(resJson => {
            setRepos(resJson)
        })
    }


    return (
        <div className={styles.container}>
            <h4 className={styles.h4}>Lista de repositorios:</h4>
            <div className={styles.container__repositorios}>
            <ul className={styles.ul}>
                {userRepos.map(repositorio => (
                    <li className={styles.li} key={repositorio.id}>
                        <img className={styles.img} src="https://via.placeholder.com/50x50" />
                        <b>Nome: </b> <span className={styles.span}>{repositorio.name}</span> 
                        <b>Linguagem: </b> <span className={styles.span}>{repositorio.language || 'null'} </span>
                        <a className={styles.a} target="_blank" href={repositorio.html_url}>visitar no Github</a>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    )
}

export default ReposList