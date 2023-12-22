import conteudo from "../../json/db.json";
import PropTypes from "prop-types";

// Componente de Vídeo
// eslint-disable-next-line react/prop-types
const Item = ({ db, index }) => (
    <li key={index}>
        {index} -
        <a href={db.url} target="_blank" rel="noopener noreferrer">
            <img src={db.cover} alt="Capa" />
        </a>
        <div>
            <h3>{db.title}</h3>
            <p>{db.assunto} | {db.category}</p>
        </div>
    </li>
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

// eslint-disable-next-line react/prop-types
export default function Test() {

    // Filtrar por categoria "Sentinela"
    const sentinelaAssuntos = conteudo.filter(item => item.category === "Sentinela").map(
        (db, index) =>
            <Item key={index} db={db} index={index} />
    );

    // Filtrar por categoria "Farol"
    const farolAssuntos = conteudo.filter(item => item.category === "Farol").map(
        (db, index) =>
            <Item key={index} db={db} index={index} />
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