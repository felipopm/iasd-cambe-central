import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Container from '../../components/Container'
import styles from './Sobre.module.css'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Sobre() {
    return(
        <>
            <Header />
            <Container>
                <div className={styles.sobre}>

                    <h2>Sobre</h2>
                    
                    <section className={styles.endereco}>
                        <h3>Igreja Adventista do Sétimo dia Central de Cambé</h3>
                        <h4>R. Bélgica, 1749 - Centro, Cambé - PR, 86181-080 </h4>
                        <h4>Próximo ao Centro Cultural de Cambé</h4>
                    </section>

                    <section className={styles.midias}>
                        <h3>Midias sociais</h3>
                        <div className={styles.midia}>
                            <a href="https://www.instagram.com/iasdcentraldecambe/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                            <a href="https://www.facebook.com"  target="_blank" rel="noopener noreferrer">
                                <FaFacebook />
                            </a>
                            <a href="https://www.youtube.com"  target="_blank" rel="noopener noreferrer">
                                <FaYoutube />
                            </a>
                        </div>
                    </section>

                </div>
            </Container>
            <Footer />
        </>
    );
}

export default Sobre