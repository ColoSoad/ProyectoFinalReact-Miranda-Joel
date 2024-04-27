import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    // FN PARA LIMPIAR EL CARRITO
    const clear = () => {
        setItems([]);
        location.href = '/';
    };

    //FN PARA AGREGAR ITEMS AL CARRITO
    const addItem = (item, quantity) => {
        const exists = items.some((i) => i.id === item.id);

        if (exists) {
            const updateItems = items.map((i) => {
                if (i.id === item.id) {
                    return {
                        ...i,
                        quantity: i.quantity + quantity,
                    };
                } else {
                    return i;
                }
            });
            setItems(updateItems);
        } else {
            setItems((prev) => {
                return [...prev, { ...item, quantity }];
            });
        }
    };

    //FN PARA REMOVER UN PRODUCTO DENTRO DEL CARRITO
    const removeItem = (id) => {
        const filterItems = items.filter((item) => item.id !== id);
        setItems(filterItems);
        if (filterItems.length <= 0) {
            location.href = '/';
        }
    };

    return <CartContext.Provider value={{ addItem, clear, items, removeItem }}>{children}</CartContext.Provider>;
};
