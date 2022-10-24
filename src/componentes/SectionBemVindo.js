import styles from './SectionBemVindo.module.css'

function Header(){
    return (
        <section className={styles.SectionContainer}>
            <div className={styles.SectionBox}>
                <div className={styles.SectionDivTexts}>
                    <p>O mais amado do bairro</p>
                    <h1>Bem-Vindo</h1>
                    <h2>Reconhecido pela boa comida e bebida desde 1978.</h2>
                    <p className={styles.Text}>
                        perimiada peka instituto Claudio manuel de qualidade de culinária e oferecendo os melhores servíços.
                        perimiada peka instituto Claudio manuel de qualidade de culinária e oferecendo os melhores servíços.
                    </p>
                    <div>
                        <a>  Mais sobre nós </a>
                    </div>
                </div>
                
                <div className={styles.SectionDivImg}>
                    <h1>Horário</h1>
                    <p>Todos os dias, de 9h ate 23h</p>

                </div>
            </div>
        </section>
    );
}
export default Header