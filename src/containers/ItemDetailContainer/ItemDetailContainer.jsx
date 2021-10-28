import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import { ItemDetail } from '../../components/ItemDetail/ItemDetail';
import { Spinner } from '../../components/Spinner/Spinner';
import { UIContext } from '../../contexts/UIContext';
import { getFirestore } from '../../firebase/config';

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const [error, setError] = useState(null);
    const {loading, setLoading} = useContext(UIContext);

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);

        const db = getFirestore();
        const items = db.collection('items');
        const item = items.doc(id);

        item.get()
            .then((doc) => {
                if(!doc.exists){
                   setError('Oops! Este id de producto no existe. Si querés, contactate con nosotros.')
                } else {
                    setItem({id : doc.id, ...doc.data()});
                }

            })
            .finally(() => {
                setLoading(false);
            });

    }, [id, setLoading]);

    return (
        <section className="flex justify-center align-items-center">
            {
                loading ?
                <Spinner/> :
                <ItemDetail {...item} error={error}/>
            }
        </section>
    )
}
