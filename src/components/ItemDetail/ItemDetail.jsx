import '../ItemDetail/ItemDetail.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemCount } from '../ItemQuantitySelector/ItemCount';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

export const ItemDetail = ({ items }) => {
    const { addItem, items: cartItems } = useContext(CartContext);
    const productoEnCarrito = cartItems.find(
    (i) => i.id === items.id
    );

    const cantidadEnCarrito = productoEnCarrito
        ? productoEnCarrito.quantity
        : 0;

    const stockDisponible = items.stock - cantidadEnCarrito;
    const add = (quantity) => addItem(items, quantity);
    return (
        <div className="itemDetail">
            <div className="detail">
                <h1 className="titul">{items.title}</h1>
                <div className="imgYdetalle">
                    <div className="left">
                        <img src={items.image} alt={items.title} className="col-md-6 imgleft" />
                    </div>
                    <div className="right">
                        <p className="precio">$ {items.price}</p>
                        <p className="parrafo">{items.description}</p>
                        {
                            items.stock ?
                            <p className="stock">Stock = {items.stock}</p>
                            :
                            <p className="stock">Stock = {items.stock} <span className="no-disponible">(no disponible)</span></p>
                        }
                    </div>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto divbtn">
                    <ItemCount stock={stockDisponible} onAdd={add} />
                </div>
            </div>
        </div>
    );
};
