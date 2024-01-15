import { useState } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../components/Container';
import styles from './Home.module.css'
import Item from "../../components/Card";
import conteudo from "../../json/db.json";
import Carousel from "../../components/Carousel";

function Home() {

  /*PARA ADICIONAR NOVO CONTEÚDO. AINDA NÃO FUNCIONA*/
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
  /*PARA ADICIONAR NOVO CONTEÚDO. AINDA NÃO FUNCIONA*/


  const [filtroCategoria, setFiltroCategoria] = useState('');
  // Filtrar por categoria e titulo
  // conteudo.filter(...) filtra o arquivo db.json...
  // item.category === "Estudo" filtra pela category que tem o valor Estudo...
  // em item.title.toLowerCase() toLowerCase() transforma as chaves em letra minusculas e buscando por "title"...
  // .includes() verifica se existem outras string dentro da string "title"
  const estudosBiblicos = conteudo.filter((item) => item.category === "Estudo" && item.title.toLowerCase().includes(filtroCategoria.toLowerCase()))
    // O componente Item representa cada vídeo do arquivo video.json, e é mapeado.
    .map((db, index) => <Item key={index} db={db} index={index} />);
  const handleEstudo = (categoria) => {
    // Atualizar o estado do filtro de texto
    setFiltroCategoria(categoria);
  }

  const [filtroTexto, setFiltroTexto] = useState('');
  // Filtrar por titulo
  // conteudo.filter(...) filtra o arquivo db.json...
  // item.category === "Sentinela" || item.category === "Farol" || item.category === "Sal" filtra se for igual a Sentinela, Farol, e Sal...
  // em item.title.toLowerCase() toLowerCase() transforma as chaves em letra minusculas e buscando por "title"...
  // .includes() verifica se existem outras string dentro da string "title"
  const assuntosGerais = conteudo.filter((item) => item.category === "Sentinela" || item.category === "Farol" || item.category === "Sal" && item.title.toLowerCase().includes(filtroTexto.toLowerCase()))
    // O componente Item representa cada vídeo do arquivo video.json, e é mapeado.
    .map((db, index) => <Item key={index} db={db} index={index} />);
  const handlePesquisa = (texto) => {
    // Atualizar o estado do filtro de texto
    setFiltroTexto(texto);
  }

  return (
    <>
      <Header />
      <Container onPesquisa={handlePesquisa} onEstudo={handleEstudo}>
        <section className={styles.tudo}>

          <div className={styles.estudos_biblicos}>
            <h3>Estudos Bíblicos</h3>
            <div className={styles.estudos}>
              <Carousel>
                {estudosBiblicos}
              </Carousel>
            </div>
          </div>

          <div className={styles.linha_horizontal}></div>

          <div className={styles.livraria}>
            <h3>Livros</h3>
            <div className={styles.livros}>
              <div className={styles.livro}>
                <a href="https://drive.google.com/file/d/1jy8d1qZaLS1BnQdQXj6uOrGmfCjf4iEi/view?usp=drive_link" target='_blank' rel="noreferrer"><img src="../../../public/o-grande-conflito.png" alt="O grande conflito" height="200" /></a>
                <h1>O grande conflito</h1>
              </div>
              <div className={styles.livro}>
                <a href="https://drive.google.com/file/d/1A3wAk8YM33OeArCa4DTFogHdPjNstUs_/view?usp=drive_link" target='_blank' rel="noreferrer"><img src="../../../public/nisto-cremos.png" alt="Nisto cremos" height="200" /></a>
                <h1>Nisto cremos</h1>
              </div>
              <div className={styles.livro}>
                <a href="https://drive.google.com/file/d/14gfnsiJYTT5fbeIdJL5Zda-89g39v3o0/view?usp=drive_link" target='_blank' rel="noreferrer"><img src="../../../public/o-desejado.png" alt="O desejado de todas a nações" height="200" /></a>
                <h1>O desejado de todas a nações</h1>
              </div>
              <div className={styles.livro}>
                <a href="https://drive.google.com/file/d/1uEZS-QJGN6j64VCys_ZSLy1Yii4DYVMy/view?usp=drive_link" target='_blank' rel="noreferrer"><img src="../../../public/manual-iasd-2016.png" alt="Manual IASD 2016" height="200" /></a>
                <h1>Manual IASD 2016</h1>
              </div>
            </div>
          </div>

          <div className={styles.linha_horizontal}></div>

          <div className={styles.noticiasenovo}>
            <div className={styles.noticias}>
              <h3>Notícias</h3>
              <div className={styles.noticia}>
                <a href="https://adra.org.br/rio-grande-do-sul/projeto-visao-solidaria-braille" target='_blank' rel="noreferrer"><img src="../../../public/adra-def-visual.jpeg" alt="noticia adra def visual" height="200" /></a>
                <h1>Projeto solidário transforma vidas de pessoas com deficiência visual </h1>
              </div>
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
            <h3>Vídeos</h3>
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