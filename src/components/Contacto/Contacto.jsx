import '../Contacto/Contacto.css';
export const Contacto = () => {
    return (
        <section className="container-fluid contenedor">
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <h1>Consulta</h1>
                        <form action="">
                            <label className="box"></label>
                            <input type="text" className="form-control" name="Nombre" required placeholder="Nombre" />
                            <label className="box"></label>
                            <input type="text" className="form-control" required name="Apellido" placeholder="Apellido" />
                            <label className="box"></label>
                            <input type="email" className="form-control" id="email" name="Email" required placeholder="Email" />
                            <br />
                            <div className="areatext mb-3">
                                <textarea
                                    name=""
                                    cols="30"
                                    rows="10"
                                    className="mb-3 form-control"
                                    placeholder="Déjanos tu consulta!"
                                    id="floatingTextarea2"
                                ></textarea>
                            </div>
                            <div>
                                <label className="labels">Quiero recibir el newsletter</label>
                                <input type="checkbox" className="check" />
                            </div>
                            <div className="d-grid btns">
                                <input type="submit" className="btn btn-secondary btn-block" value="Enviar" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="derecha col-md-3">
                    <h2>Contactos</h2>
                    <div>
                        <i className="bi bi-phone cel"> 261456789</i>
                    </div>
                    <div>
                        <i className="bi bi-envelope-at-fill cel"> klothes@indus.com.ar</i>
                        <p className="pc">¡Seguinos en nuestras redes sociales!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
