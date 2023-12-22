import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Container from '../../components/Container'
import styles from './Sentinela.module.css'
import { useState } from "react";
import VideoItem from "../../components/Card";
import videos from "../../json/db.json";

function Sentinela() {
    const [filtroTexto, setFiltroTexto] = useState('');

    // Filtrar por categoria "Titulo" ou "Sentinela"
    const sentinelaAssuntos = videos.filter((item) => item.category === "Sentinela" && item.title.toLowerCase().includes(filtroTexto.toLowerCase())).map((video, index) => <VideoItem key={index} video={video} index={index} />);

    // ESTÁ NO CÓDIGO, MAS NÃO ESTÃO SENDO USADO
    const [semAbordagem, setSemAbordagem] = useState(true)
    const toggleAbordagem = () => { setSemAbordagem(!semAbordagem) }
    // ESTÁ NO CÓDIGO, MAS NÃO ESTÃO SENDO USADO

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

                    <span className={styles.abordagem} onClick={toggleAbordagem}>V</span>

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