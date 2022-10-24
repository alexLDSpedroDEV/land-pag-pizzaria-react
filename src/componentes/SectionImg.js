import Styles from './SectionImg.module.css'

function SectionImg(){
    return (
        <section className={Styles.SectionContainer}>
            <div className={Styles.SectionContain}>
                <h1>Imperial</h1>
                <h3>
                    ESPECIALIDADE ITALIANA
                </h3>    
                <p>
                    Comida boa / Bom vinho
                </p>
            </div>
        </section>
    )
}

export default SectionImg