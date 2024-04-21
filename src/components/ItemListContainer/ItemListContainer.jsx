import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../ItemListContainer/ItemListContainer.css';
import { ItemList } from '../ItemList/ItemList';
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';
import { Titulo } from '../Titulo/Titulo';

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        let refCollection;
        if (!id) refCollection = collection(db, 'items');
        else {
            refCollection = query(collection(db, 'items'), where('categoryId', '==', id));
        }

        getDocs(refCollection).then((results) => {
            setItems(
                results.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                })
            );
        });
    }, [id]);
    return (
        <div className="contenedor">
            <Titulo id={id} />
            <ItemList items={items} />
        </div>
    );
};
