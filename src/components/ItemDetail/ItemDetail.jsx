export const ItemDetail = ({ item }) => {
    return (
        <div className="details">
            <div className="detail">
                <h1>{item.producto}</h1>
                <div className="imgYdetalle container-fluid">
                    <div className="row">
                        <div className="left col-md-6">
                            <img src={item.img} alt={item.producto} className="col-md-6" />
                        </div>
                        <div className="right col-md-6">
                            <p className="col-md-6 parra">{item.detalle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
