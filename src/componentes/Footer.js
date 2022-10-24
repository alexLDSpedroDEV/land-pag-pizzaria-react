import Styles from './Footer.module.css'

function Footer(){
    return(
        
        <footer className={Styles.Conatiner}>
            <div className={Styles.contein}>
                <div className={Styles.center}>
                    <h2>Ligue e faça sua reserva </h2>
                    <h1>3444-5585</h1>
                </div>
            </div>
            <div className={Styles.conteinFim}>
                Projeto Academico | desnevouvedor: AlexLDS dev 
            </div>
        </footer>
        
    )
}

export default Footer