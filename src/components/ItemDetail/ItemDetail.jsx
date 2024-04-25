import '../ItemDetail/ItemDetail.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ItemDetail = ({ items }) => {
    return (
        <div className="detail">
            <h1 className="titul">{items.title}</h1>
            <div className="imgYdetalle">
                <div className="left">
                    <img src={items.image} alt={items.title} className="col-md-6 imgleft" />
                </div>
                <div className="right ">
                    <p className="precio">$ {items.price}</p>
                    <p className="parrafo">{items.description}</p>
                    <p className="stock">Stock = {items.stock}</p>
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
