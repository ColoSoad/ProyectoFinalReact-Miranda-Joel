import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([{ name: 'Joel' }]);

    const clear = () => setItems([]);
    const addItems = (item) => setItems((prev) => [...prev, item]);

    return <CartContext.Provider value={{ addItems, clear, items }}>{children}</CartContext.Provider>;
};
