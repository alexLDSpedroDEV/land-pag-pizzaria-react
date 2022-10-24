import Styles from './SectionNossoCardapio.module.css'

function SectionNossoCardapio(){
    return (
        <section className={Styles.SectionContainer}>
            <h1 className={Styles.title}>Nosso Cardápio</h1>
            <h2 className={Styles.subTitle}>Ingredientes de qualidade, pratos saborosos </h2>
            <div className={Styles.SectionBox}>
                <div className={Styles.SectionBoxPratos}>
                    <div className={Styles.img1}></div>
                    <div className={Styles.text}>
                        <div>
                            <h4> Pizza de calabreza</h4>
                        </div>
                        <div>
                            <h1>R$ 38</h1>
                        </div>
                    </div>
                </div>
                <div className={Styles.SectionBoxPratos}>
                    <div className={Styles.img2}></div>
                    <div className={Styles.text}>
                        <div>
                            <h4> Pizza de Peperone</h4>
                        </div>
                        <div>
                            <h1>R$ 45</h1>
                        </div>
                    </div>
                </div>
                <div className={Styles.SectionBoxPratos}>
                    <div className={Styles.img3}></div>
                    <div className={Styles.text}>
                        <div>
                            <h4> Pizza de Quatro Queijo</h4>
                        </div>
                        <div>
                            <h1>R$ 35</h1>
                        </div>
                    </div>
                </div>
                <div className={Styles.SectionBoxPratos}>
                    <div className={Styles.img4}></div>
                    <div className={Styles.text}>
                        <div>
                            <h4> Pizza de Carne Seca</h4>
                        </div>
                        <div>
                            <h1>R$ 48</h1>
                        </div>
                    </div>
                </div>            
            </div>
            <p className={Styles.btn}>Cardapio Completo</p>
        </section>
    )
}

export default SectionNossoCardapio
