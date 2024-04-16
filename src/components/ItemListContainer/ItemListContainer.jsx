import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../ItemListContainer/ItemListContainer.css';
import { ItemList } from '../ItemList/ItemList';
import data from '../../data/productos.json';

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        const get = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000);
        });
        get.then((data) => {
            if (id) {
                const filteredData = data.filter((i) => i.category === id);
                setItems(filteredData);
            } else {
                setItems(data);
            }
        });
    }, [id]);
    return (
        <div className="contenedor">
            <h1 className="titulo">
                Tienda <hr /> {id}
            </h1>
            <ItemList items={items} />
        </div>
    );
};
