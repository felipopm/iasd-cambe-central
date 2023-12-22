import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Container from '../../components/Container'
import styles from './Sal.module.css'
import Item from "../../components/Card";
import conteudo from "../../json/db.json";
import { useState } from "react";

function Sal(){

    const [filtroTexto, setFiltroTexto] = useState('');

    // Filtrar por categoria "Titulo" ou "Sentinela"
    const salAssuntos = conteudo.filter((item) => item.category === "Sal" && item.title.toLowerCase().includes(filtroTexto.toLowerCase())).map((db, index) => <Item key={index} db={db} index={index} />);

    const handlePesquisa = (texto) => {
        // Atualizar o estado do filtro de texto
        setFiltroTexto(texto);
    }

    return(
        <>
            <Header />
            <Container onPesquisa={handlePesquisa}>
                <section className={styles.sal}>

                    <h2>Sal</h2>
                    <div className={styles.assuntos}>
                        {salAssuntos}
                    </div>
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Sal