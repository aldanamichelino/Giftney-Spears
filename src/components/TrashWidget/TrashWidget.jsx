import React, {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CartContext } from '../../contexts/CartContext';

export const TrashWidget = () => {

    const { emptyCart } = useContext(CartContext);

    return (
        <>
            <FontAwesomeIcon icon="trash" className="trash flex justify-self-end"/>
        </>
    )
}
