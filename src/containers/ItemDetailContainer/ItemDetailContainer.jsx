import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import { getProduct } from '../../helpers/products';
import { ItemDetail } from '../../components/ItemDetail/ItemDetail';
import { Spinner } from '../../components/Spinner/Spinner';
import { UIContext } from '../../contexts/UIContext';

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const [error, setError] = useState(null);
    const {loading, setLoading} = useContext(UIContext);

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
