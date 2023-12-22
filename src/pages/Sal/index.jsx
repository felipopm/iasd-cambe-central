import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Container from '../../components/Container'
import styles from './Sal.module.css'
import VideoItem from "../../components/Card";
import videos from "../../json/db.json";
import { useState } from "react";

function Sal(){

    const [filtroTexto, setFiltroTexto] = useState('');

    // Filtrar por categoria "Titulo" ou "Sentinela"
    const salAssuntos = videos.filter((item) => item.category === "Sal" && item.title.toLowerCase().includes(filtroTexto.toLowerCase())).map((video, index) => <VideoItem key={index} video={video} index={index} />);

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