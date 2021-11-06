import React, {useContext, useState} from 'react';
import { CartContext } from '../../contexts/CartContext';

export const CartItemCounter = ({id, stock}) => {

    const { itemAmountInCart, modifyItemAmountInCart } = useContext(CartContext);

    const [amount, setAmount] = useState(() => itemAmountInCart(id));

    const handleLess = () => {
        if(amount > 1){

            let newAmount = amount - 1;
            setAmount(newAmount);
            modifyItemAmountInCart(id, newAmount);

        }
    }
    
    const handleMore = () => {
        if(amount < stock){

            let newAmount = amount + 1;
            setAmount(newAmount);
            modifyItemAmountInCart(id, newAmount);
        }
    }

    return (
        <div className="flex justify-center items-center w-1/5">
           <div className="flex items-center">
                <button className="counter__control" onClick={handleLess}>-</button>
                    <span className="mx-2">{amount}</span>
                <button className="counter__control" onClick={handleMore}>+</button>
           </div>
        </div>
    )
}
