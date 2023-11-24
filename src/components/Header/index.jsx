import styles from "./Header.module.css"
import sentinela from './images/sentinela.png'
import iasd from './images/iasd-um.png'
import farol from './images/farol.png'
import sal from './images/saleiro.png'
import { Link } from "react-router-dom"
import { useState } from "react"

function Header() {

    const [ showMenu, setShowMenu ] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return(
        <header className={styles.header}>
            <nav className={styles.ajuda}>
                <Link to="/ajuda">
                    <button>AJUDA</button>
                </Link>
            </nav>
            <figure className={styles.paginas}>
                <Link to="/sentinela">
                    <img src={sentinela} alt="sentinela" />
                </Link>
                <Link to="/iasd">
                    <img src={iasd} alt="iasd" />
                </Link>
                <Link to="/farol">
                    <img src={farol} alt="farol" />
                </Link>
                <Link to="/sal">
                    <img src={sal} alt="sal" />
                </Link>
            </figure>
            <nav 
                className={`${styles.menu} ${ showMenu ? styles.show : ''}`}
            >
                <Link to="/">Home</Link>
                <a 
                href="https://igrejas.adventistas.org/" 
                target="_blank" 
                rel="noreferrer"
                >Encontre uma igreja</a>
                <Link to="/sobre">Sobre</Link>
                <Link to="/estou">Como estou</Link>
            </nav>
            <div className={styles.menuSandwich}>
                <div
                    className={styles.menuButton}
                    onClick={toggleMenu}
                >
                    <span className={styles.linha}></span>
                    <span className={styles.linha}></span>
                    <span className={styles.linha}></span>
                </div>
            </div>
        </header>
    );
}

export default Header