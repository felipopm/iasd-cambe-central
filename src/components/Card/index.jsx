import PropTypes from "prop-types";
import styles from "./Card.module.css"

const Item = ({ db, index }) => (
  <div className={styles.assuntos} key={index}>
    <a 
      className={styles.link} 
      href={db.url} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      {db.covere ? 
        <iframe src={db.covere} width="150" height="265"></iframe> :
        <img src={db.coverv} alt="Capa" />}
    </a>
    {db.coverv ? 
      <h3 className={styles.titulo}>{db.title}</h3> : null} 
    {db.coverv ?
      <p>{db.assunto} | {db.category}</p> : null}
  </div>
);

Item.propTypes = {
  db: PropTypes.shape({
    url: PropTypes.string.isRequired,
    covere: PropTypes.string.isRequired,
    coverv: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    assunto: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};


export default Item;
