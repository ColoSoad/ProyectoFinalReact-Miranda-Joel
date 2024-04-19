import '../Titulo/Titulo.css';

export const Titulo = (props) => {
    if (props.id) {
        return (
            <div className="div-titulo">
                <h2 className="titulo">{props.id}</h2>
            </div>
        );
    } else {
        return (
            <div className="div-titulo">
                <h1 className="titulo">Tienda</h1>
            </div>
        );
    }
};
