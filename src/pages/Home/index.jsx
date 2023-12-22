import { useState } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../components/Container';
import styles from './Home.module.css'
import VideoItem from "../../components/Card";
import videos from "../../json/db.json";

function Home() {

  const [link, setLink] = useState('');
  const [titulo, setTitulo] = useState('');
  const [assunto, setAssunto] = useState('');

  const handleAdicionarConteudo = () => {
    // Simulando a adição de novo conteúdo ao estado local
    const novoConteudo = { link, titulo, assunto, };
    // Adicionando o novo conteúdo à lista de conteúdos (simulação)
    // Esta é uma abordagem bastante simplificada e não persistente
    // No mundo real, você precisaria enviar esses dados para um servidor back-end
    // que manipularia a adição do conteúdo ao arquivo JSON.
    console.log('Novo Conteúdo:', novoConteudo);

    // Limpa os campos do formulário
    setLink('');
    setTitulo('');
    setAssunto('');

  };

  const [filtroTexto, setFiltroTexto] = useState('');
  // Filtrar por categoria "Titulo"
  const assuntosGerais = videos.filter((item) => item.title.toLowerCase().includes(filtroTexto.toLowerCase())).map((video, index) => <VideoItem key={index} video={video} index={index} />);

  const handlePesquisa = (texto) => {
    // Atualizar o estado do filtro de texto
    setFiltroTexto(texto);
  }

  return (
    <>
      <Header />
      <Container onPesquisa={handlePesquisa}>
        <section className={styles.tudo}>

          <div className={styles.noticiasenovo}>
            <div className={styles.noticias}>
              <h3>Notícias</h3>
            </div>

            <div className={styles.linha_vertical}></div>

            <div className={styles.novo}>
              <h3>Novo</h3>
              <form
                className={styles.formulario}
                action="/submit"
                method='post'
                onSubmit={(e) => { e.preventDefault(); handleAdicionarConteudo(); }}
              >
                <input
                  type="text"
                  placeholder='Link do conteúdo'
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
                <input
                  type="text"
                  placeholder='Titulo do conteúdo'
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                />
                <div>
                  <label htmlFor="assunto">Assunto:</label>
                  <select
                    name="assunto"
                    id="assunto"
                    value={titulo}
                    onChange={(e) => setAssunto(e.target.value)}
                  >
                    <option value="Volta de Jesus">Volta de Jesus</option>
                    <option value="Apocalipse">Apocalipse</option>
                    <option value="Política">Política</option>
                    <option value="Cultura">Cultura</option>
                    <option value="Religião">Religião</option>
                    <option value="Profissão">Profissão</option>
                    <option value="Suicídio">Suicídio</option>
                    <option value="Verdade">Verdade</option>
                    <option value="Perdido">Perdido</option>
                    <option value="Música">Música</option>
                    <option value="Relacionamento">Relacionamento</option>
                    <option value="Amor">Amor</option>
                    <option value="Crescimento">Crescimento</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>
                <button type='submit'>Adicionar conteúdo</button>
              </form>

              <div className={styles.conteudo_novo}>
                <div>Conteúdo</div> 
                <div>X</div>
                <div>adicionado recentemente...</div>
              </div>
              
            </div>
          </div>

          <div className={styles.linha_horizontal}></div>

          <div className={styles.geral}>
            <h3>Todo o conteúdo</h3>
            <div className={styles.conteudo}>
              {assuntosGerais}
            </div>
          </div>

        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Home