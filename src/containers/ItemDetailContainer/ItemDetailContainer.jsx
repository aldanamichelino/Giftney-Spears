import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getProduct } from '../../helpers/products';
import { ItemDetail } from '../../components/ItemDetail/ItemDetail';
import { Spinner } from '../../components/Spinner/Spinner';

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);

        getProduct(id)
            .then((res) => {
                setItem(res)
            })
            .catch((err) => setError(err))
            .finally(() => {
                setLoading(false);
        });

    }, [id]);

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
