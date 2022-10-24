import styles from './Header.module.css'

function Header(){
    function open(){
        document.querySelectorAll('.material-symbols-outlined').style.display= 'none';
    }
    return (

        <header className={styles.HeaderContainer}>
            <div>
                <span className={styles.HeaderLogo}>
                    Imperial
                </span>
            </div>
            <div>
                <nav className={styles.HeaderNav}>
                    <a>Home</a>
                    <a>Cardapios</a>
                    <a>Quem somos</a>
                    <a>Noticias</a>
                    <a className={styles.HeaderNavBtn}>Contato</a>
                </nav>
                <nav className={styles.HeaderNavOPen}>
                    <a className={styles.HeaderNavBtn}>Contato</a>
                </nav>
            </div>
            
        </header>
    );
}
export default Header