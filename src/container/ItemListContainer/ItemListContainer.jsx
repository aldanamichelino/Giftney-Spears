import React, { useState, useEffect } from 'react';
import { getProducts } from '../../helpers/products';
import { ItemList } from '../ItemList/ItemList';
import { Spinner } from '../../components/Spinner/Spinner';

export const ItemListContainer = () => {

       const [items, setItems] = useState([]);
       const [loading, setLoading] = useState(false);

       useEffect(() => {
           setLoading(true);

           getProducts()
            .then((res) => { setItems(res) })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false);
            });
            
       }, []);

       return (
           <section className="flex justify-center align-items-center">
               {
                   loading ?
                    <Spinner/> :
                    <ItemList products={items}/>
               }
           </section>
       )

}
