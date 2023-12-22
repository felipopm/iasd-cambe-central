import PropTypes from "prop-types";
import styles from "./Card.module.css"

const VideoItem = ({ video, index }) => (
  <div className={styles.assuntos} key={index}>
    <a className={styles.link} href={video.url} target="_blank" rel="noopener noreferrer"> <img src={video.cover} alt="Capa" />
    </a>
    <h3 className={styles.titulo}>{video.title}</h3>
    <p>{video.assunto} | {video.category}</p>
  </div>
);

VideoItem.propTypes = {
  video: PropTypes.shape({
    url: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    assunto: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default VideoItem;