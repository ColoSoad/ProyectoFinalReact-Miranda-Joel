import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { getFirestore, getDoc, doc } from 'firebase/firestore';

export const ItemDetailContainer = () => {
    const [items, setItems] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const db = getFirestore();
        const refDoc = doc(db, 'items', id);
        getDoc(refDoc).then((results) => {
            setItems({ id: results.id, ...results.data() });
        });
    }, [id]);

    if (!items) return null;
    return <ItemDetail items={items} />;
};
