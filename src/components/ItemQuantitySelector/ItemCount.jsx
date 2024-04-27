import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import '../ItemQuantitySelector/ItemCount.css';

export const ItemCount = ({ onAdd, stock }) => {
    const [quantity, setQuantity] = useState(1);

    const HandleDecrease = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };
    const HandleIncrease = () => {
        if (stock > quantity) setQuantity(quantity + 1);
    };
    const HandleAdd = () => {
        setQuantity(1);
        onAdd(quantity);
    };

    return (
        <div className="divbtn">
            <Button variant="dark" className="btn-decreciente" onClick={HandleDecrease}>
                -
            </Button>
            <input value={quantity} readOnly className="Input" />
            <Button variant="dark" className="btn-creciente" onClick={HandleIncrease}>
                +
            </Button>
            <Button variant="light" className="botonn bot btn" onClick={HandleAdd}>
                Agregar al carrito
            </Button>
        </div>
    );
};
