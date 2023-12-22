import { useState } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../components/Container';
import styles from './Home.module.css'
import Item from "../../components/Card";
import conteudo from "../../json/db.json";

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
  // Filtrar por titulo
  // conteudo.filter(...) filtra o arquivo db.json...
  // item.title.toLowerCase() toLowerCase() transforma as chaves em minusculas e buscando por "title"...
  // .includes() verifica se existem outras string dentro da string "title"
  const assuntosGerais = conteudo.filter((item) => item.title.toLowerCase().includes(filtroTexto.toLowerCase()))
  // O componente Item representa cada vídeo do arquivo video.json, e é mapeado.
  .map((db, index) => <Item key={index} db={db} index={index} />);
  const handlePesquisa = (texto) => {
    // Atualizar o estado do filtro de texto
    setFiltroTexto(texto);
  }

  const [filtroCategoria, setFiltroCategoria] = useState('');
  // Filtrar por categoria e titulo
  // conteudo.filter(...) filtra o arquivo db.json...
  // item.category filtra pela category que tem o valor Estudo...
  // item.title.toLowerCase() toLowerCase() transforma as chaves em minusculas e buscando por "title"...
  // .includes() verifica se existem outras string dentro da string "title"
  const estudosBiblicos = conteudo.filter((item) => item.category === "Estudo" && item.title.toLowerCase().includes(filtroCategoria.toLowerCase()))
  // O componente Item representa cada vídeo do arquivo video.json, e é mapeado.
  .map((db, index) => <Item key={index} db={db} index={index}/>);
  const handleEstudo = (categoria) => {
    // Atualizar o estado do filtro de texto
    setFiltroCategoria(categoria);
  }

  return (
    <>
      <Header />
      <Container onPesquisa={handlePesquisa} onEstudo={handleEstudo}>
        <section className={styles.tudo}>

          <div className={styles.estudos_biblicos}>
            <h3>Estudos Bíblicos</h3>
            <div className={styles.estudos}>

              {estudosBiblicos}

              {/* <iframe src="https://drive.google.com/file/d/1MAD-B9WWX8sJNl6b7ZyycTgcpifi6hrs/preview" width="200" height="300"></iframe>
              
              <iframe src="https://drive.google.com/file/d/1Kte-CGsWQSAqBf5vhmSV5xQZPqR3Jfov/preview" width="200" height="300"></iframe>

              <iframe src="https://drive.google.com/file/d/1Kte-CGsWQSAqBf5vhmSV5xQZPqR3Jfov/preview" width="200" height="300"></iframe>

              <iframe src="https://drive.google.com/file/d/1Kte-CGsWQSAqBf5vhmSV5xQZPqR3Jfov/preview" width="200" height="300"></iframe>

              <iframe src="https://drive.google.com/file/d/1Kte-CGsWQSAqBf5vhmSV5xQZPqR3Jfov/preview" width="200" height="300"></iframe>

              <iframe src="https://drive.google.com/file/d/1Kte-CGsWQSAqBf5vhmSV5xQZPqR3Jfov/preview" width="200" height="300"></iframe>

              <iframe src="https://drive.google.com/file/d/1Kte-CGsWQSAqBf5vhmSV5xQZPqR3Jfov/preview" width="200" height="300"></iframe>

              <iframe src="https://drive.google.com/file/d/1Kte-CGsWQSAqBf5vhmSV5xQZPqR3Jfov/preview" width="200" height="300"></iframe> */}

            </div>
          </div>

          <div className={styles.linha_horizontal}></div>

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