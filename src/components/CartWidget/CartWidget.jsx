import React, {useContext, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CartContext } from '../../contexts/CartContext';

export const CartWidget = () => {

    const { totalItemsAmount } = useContext(CartContext);

    return (
        <>
            <FontAwesomeIcon icon="shopping-cart" className="cart flex justify-self-end self-end"/>
            <span className="cart__amount__count absolute left-5 -top-3 rounded-full w-5 h-5 p-0 m-0 text-center">{ totalItemsAmount() }</span>
        </>
    )
}
