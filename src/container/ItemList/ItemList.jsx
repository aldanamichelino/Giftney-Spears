import React from 'react';
import { Item } from '../Item/Item';

export const ItemList = ({ products = [] }) => {
    return (
        <div className="item__list">
            <h2 className="item__list__subtitle">¡Los mejores regalos para la Britney Army encontralos en Giftney Spears!</h2>

            <div className="list relative m-3 flex flex-wrap mx-auto justify-center">
                { products.map( (item) => <Item {...item} key={item.id}/>)}
            </div>
        </div>
    )
}
