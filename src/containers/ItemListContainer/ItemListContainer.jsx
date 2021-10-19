import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import { getProducts } from '../../helpers/products';
import { ItemList } from '../../components/ItemList/ItemList';
import { Spinner } from '../../components/Spinner/Spinner';
import { UIContext } from '../../contexts/UIContext';

export const ItemListContainer = () => {

       const [items, setItems] = useState([]);
       const {loading, setLoading} = useContext(UIContext);

       const {categoryId} = useParams();

       useEffect(() => {
           setLoading(true);

           getProducts()
            .then((res) => {
                if(categoryId){
                    if(categoryId === 'freebritney'){
                        setItems(res.filter(prod => prod.freeBritney === 1));
                    } else {
                        setItems(res.filter(prod => prod.category === categoryId));
                    }
                } else {
                    setItems(res);
                };
             })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false);
            });

       }, [categoryId]);

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
