import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Container from '../../components/Container'
import styles from './Sentinela.module.css'
import { useState } from "react";
import Item from "../../components/Card";
import conteudo from "../../json/db.json";

function Sentinela() {
    const [filtroTexto, setFiltroTexto] = useState('');

    // Filtrar por categoria "Titulo" ou "Sentinela"
    const sentinelaAssuntos = conteudo.filter((item) => item.category === "Sentinela" && item.title.toLowerCase().includes(filtroTexto.toLowerCase())).map((db, index) => <Item key={index} db={db} index={index} />);

    const handlePesquisa = (texto) => {
        // Atualizar o estado do filtro de texto
        setFiltroTexto(texto);
    }

    return (
        <>
            <Header />
            <Container onPesquisa={handlePesquisa}>
                <section className={styles.sentinela}>

                    <div className={styles.comabordagem}>
                        <button className={styles.superficial}>Superficial</button>
                        <button className={styles.profundo}>Profundo</button>
                    </div>

                    <h2>Sentinela</h2>

                    <div className={styles.assuntos}>       
                        {sentinelaAssuntos}
                    </div>

                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Sentinela;