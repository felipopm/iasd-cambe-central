import videos from "../../json/video.json";
import PropTypes from "prop-types";

// Componente de Vídeo
// eslint-disable-next-line react/prop-types
const VideoItem = ({ video, index }) => (
    <li key={index}>
        {index} -
        <a href={video.url} target="_blank" rel="noopener noreferrer">
            <img src={video.cover} alt="Capa" />
        </a>
        <div>
            <h3>{video.title}</h3>
            <p>{video.assunto} | {video.category}</p>
        </div>
    </li>
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

// eslint-disable-next-line react/prop-types
export default function Test() {

    // Filtrar por categoria "Sentinela"
    const sentinelaAssuntos = videos.filter(item => item.category === "Sentinela").map(
        (video, index) =>
            <VideoItem key={index} video={video} index={index} />
    );

    // Filtrar por categoria "Farol"
    const farolAssuntos = videos.filter(item => item.category === "Farol").map(
        (video, index) =>
            <VideoItem key={index} video={video} index={index} />
    );

    return (
        <>
            <h2>Sentinela</h2>
            <ul>{sentinelaAssuntos}</ul>

            <h2>Farol</h2>
            <ul>{farolAssuntos}</ul>
        </>
    );
}