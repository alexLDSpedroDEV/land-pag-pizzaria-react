import Styles from './SectionHappyDay.module.css'

function SectionHappyDay(){
    return (
        <section className={Styles.SectionContainer}>
            <div className={Styles.SectionContein}>
                <div className={Styles.Img}></div>
                <div className={Styles.SectionConteinBox}>
                    <h4>Toda Quarta-feira</h4>
                    <h1>Happy Hour</h1>
                    <p> medade do preço das garrafas de vinho e seis tipos de pizza por R$25</p>
                    <div>
                        <p>Mais noticias</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default SectionHappyDay