import '../ItemDetail/ItemDetail.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ItemDetail = ({ item }) => {
    return (
        <div className="detail">
            <h1 className="titul">{item.producto}</h1>
            <div className="imgYdetalle">
                <div className="left">
                    <img src={item.img} alt={item.producto} className="col-md-6 imgleft" />
                </div>
                <div className="right ">
                    <p className="precio">$ PRECIO</p>
                    <p className="parrafo">{item.detalle}</p>
                </div>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto divbtn">
                <button type="button" className="botonn bot btn btn-success">
                    Comprar ahora
                </button>
            </div>
        </div>
    );
};
