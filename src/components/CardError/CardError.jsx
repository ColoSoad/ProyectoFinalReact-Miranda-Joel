export const CardError = () => {
    return (
        <div>
            <p className="error">
                <img src="./src/assets/img/error.png" alt="foto error" className="fotoError" />
            </p>
            <h1 className="error">Error 404</h1>
            <h2 className="error">No se ha podido cargar la información</h2>
            <h3 className="error">Intenta nuevamente en unos instantes...</h3>
        </div>
    );
};
