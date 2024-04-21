import { Link } from 'react-router-dom';

import imgCarrito from '../../assets/img/cartshop.png';
import '../cartWidget/CartWidget.css';
export const CartWidget = () => {
    return (
        <Link to="/cart">
            <>
                <div className="cart">
                    <img src={imgCarrito} alt="Imagen Ecommerce" className="cart" />
                    <span className="cart numeroHardcodeado">0</span>
                </div>
            </>
        </Link>
    );
};
