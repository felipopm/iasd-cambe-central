import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Container from '../../components/Container'
import styles from './Estou.module.css'

function Farol(){
    return(
        <>
            <Header />
            <Container>
                <div className={styles.estou}>
                    <h2>Estou</h2>
                </div>
            </Container>
            <Footer />
        </>
        
    );
}

export default Farol