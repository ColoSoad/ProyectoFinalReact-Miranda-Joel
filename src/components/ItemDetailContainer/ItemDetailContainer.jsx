import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import data from '../../data/productos.json';

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const get = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000);
        });
        get.then((data) => {
            const findedData = data.find((i) => i.id === parseInt(id));
            setItem(findedData);
        });
    }, [id]);

    if (!item) return null;
    return <ItemDetail item={item} />;
};
