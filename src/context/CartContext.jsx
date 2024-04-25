import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([
        { id: '1', title: 'Jeans clásico', quantity: 5, price: 24560 },
        { id: '2', title: 'Jeans oversize', quantity: 15, price: 46980 },
        { id: '3', title: 'Remeras', quantity: 7, price: 12856 },
    ]);

    const clear = () => setItems([]);

    const addItems = (item) => setItems((prev) => [...prev, item]);

    return <CartContext.Provider value={{ addItems, clear, items }}>{children}</CartContext.Provider>;
};
