import styles from './Container.module.css'

// eslint-disable-next-line react/prop-types
function Container({ children, onPesquisa, onEstudo }) {
  const handlePesquisa = (event) => {
    const textoPesquisa = event.target.value;
    // Chamar a função de pesquisa do componente pai (Sentinela)
    onPesquisa(textoPesquisa);
  }

  const handleEstudo = (event) => {
    const categoriaPesquisa = event.target.value;
    // Chamar a função de pesquisa do componente pai (Sentinela)
    onEstudo(categoriaPesquisa);
  }

  return (
    <section className={styles.container}>
      <div className={styles.pesquisa}>
        <input
          className={styles.pergunte}
          type="search"
          placeholder='Escreva um tema'
          onChange={handlePesquisa && handleEstudo}
        />
      </div>

      {children}

    </section>
  );
}

export default Container