import styles from './Container.module.css'

// eslint-disable-next-line react/prop-types
function Container({ children, onPesquisa }) {
  const handlePesquisa = (event) => {
    const textoPesquisa = event.target.value;
    // Chamar a função de pesquisa do componente pai (Sentinela)
    onPesquisa(textoPesquisa);
  }

  return (
    <section className={styles.container}>
      <div className={styles.pesquisa}>
        <input
          className={styles.pergunte}
          type="search"
          placeholder='Escreva um tema'
          onChange={handlePesquisa}
        />
      </div>

      {children}

    </section>
  );
}

export default Container