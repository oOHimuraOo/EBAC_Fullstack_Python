import styles from './Perfil.module.css'

const Perfil = ({nome, avatar, usuario}) => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <img className={styles.perfil_avatar} src={avatar} />
                <h1 className={styles.perfil_titulo} >{usuario}</h1>
                <h2 className={styles.perfil_tiulo}>{nome}</h2>
            </div>
        </header>
    )
}

export default Perfil