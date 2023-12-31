import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Container from '../../components/Container'
import styles from './Farol.module.css'
import { useState } from "react";
import Item from "../../components/Card";
import conteudo from "../../json/db.json";

function Farol() {

    const [filtroTexto, setFiltroTexto] = useState('');

    // Filtrar por categoria "Titulo" ou "Sentinela"
    const farolAssuntos = conteudo.filter((item) => item.category === "Farol" && item.title.toLowerCase().includes(filtroTexto.toLowerCase())).map((db, index) => <Item key={index} db={db} index={index} />);

    const handlePesquisa = (texto) => {
        // Atualizar o estado do filtro de texto
        setFiltroTexto(texto);
    }

    return (
        <>
            <Header />
            <Container onPesquisa={handlePesquisa}>
                <section className={styles.farol}>

                    <div className={styles.comabordagem}>
                        <button className={styles.superficial}>Superficial</button>
                        <button className={styles.profundo}>Profundo</button>
                    </div>

                    <h2>Farol</h2>

                    <div className={styles.assuntos}>
                        {farolAssuntos}
                    </div>

                </section>
            </Container>
            <Footer />
        </>
    );
}


export default Farol;