import { Link } from 'react-router-dom';
import imgCarrito from '../../assets/img/cartshop.png';
import '../cartWidget/CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const CartWidget = () => {
    const { items } = useContext(CartContext);
    const totalItems = items.reduce((acu, valorAct) => acu + valorAct.quantity, 0);
    if (!totalItems) return null;
    return (
        <Link to="/cart">
            <>
                <div className="cart">
                    <img src={imgCarrito} alt="Imagen Ecommerce" className="cart" />
                    <span className="cart numeroHardcodeado">{totalItems}</span>
                </div>
            </>
        </Link>
    );
};
