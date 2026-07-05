import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { getFirestore, getDoc, doc, onSnapshot } from 'firebase/firestore';

export const ItemDetailContainer = () => {
    const [items, setItems] = useState(null);
    const { id } = useParams();
    useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, 'items', id);

    const unsubscribe = onSnapshot(refDoc, (docSnap) => {
        setItems({
            id: docSnap.id,
            ...docSnap.data(),
        });
    });

    return () => unsubscribe();
}, [id]);

    if (!items) return null;

    return <ItemDetail items={items} />;
};
