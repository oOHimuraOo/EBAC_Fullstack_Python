import styles from './PerfilInfo.module.css'

const InfosPerfil = ({seguidores, repos, seguindo}) => {
    return (
        <div className={styles.container}>
            <div className={styles.displayFlex}>
                <h3 className={styles.h3}>
                    <b>Seguidores:</b>
                    <p>{seguidores}</p>
                </h3>
                <h3 className={styles.repo}>
                    <b>Repositorios:</b>
                    <p>{repos}</p>
                </h3>
                <h3>
                    <b>Seguindo:</b>
                    <p>{seguindo}</p>
                </h3>
            </div>
            <button className={styles.button}>Revelar lista de repositorios</button>
        </div>
    )
}

export default InfosPerfil