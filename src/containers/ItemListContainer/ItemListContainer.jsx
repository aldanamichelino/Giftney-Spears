import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import { ItemList } from '../../components/ItemList/ItemList';
import { Spinner } from '../../components/Spinner/Spinner';
import { UIContext } from '../../contexts/UIContext';
import { getFirestore } from '../../firebase/config';

export const ItemListContainer = () => {

       const [items, setItems] = useState([]);
       const {loading, setLoading} = useContext(UIContext);

       const {categoryId} = useParams();

       
       useEffect(() => {
           setLoading(true);
           
           const db = getFirestore();

           let items;
           
           if(categoryId){
                if(categoryId === 'freebritney'){
                    items = db.collection('items').where('freeBritney', '==', 1);
                } else {
                    items = db.collection('items').where('category', '==', categoryId);
                }
           } else {
               items = db.collection('items');
           }
           

           items.get()
                .then((response) => {
                    const items = response.docs.map((doc) => {
                        return {id: doc.id, ...doc.data()}
                    });
                    setItems(items);
                })
                .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false);
            });

       }, [categoryId, setLoading]);

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
