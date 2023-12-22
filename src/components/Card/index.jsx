import PropTypes from "prop-types";
import styles from "./Card.module.css"

const Item = ({ db, index }) => (
  <div className={styles.assuntos} key={index}>
    <a className={styles.link} href={db.url} target="_blank" rel="noopener noreferrer"> <img src={db.cover} alt="Capa" />
    </a>
    <h3 className={styles.titulo}>{db.title}</h3>
    <p>{db.assunto} | {db.category}</p>
  </div>
);

Item.propTypes = {
  db: PropTypes.shape({
    url: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    assunto: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Item;
