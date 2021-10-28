import React, {useState, useContext, useEffect} from 'react';


export const ItemCounter = ({id, stock, handleAdd, isInCart, newItem }) => {

    const [amount, setAmount] = useState(0);

    const handleLess = () => {
        if(amount > 1){
            setAmount(amount - 1);
        }

    }
    
    const handleMore = () => {
        if(amount < stock){
            setAmount(amount + 1);      
        }
    }


    return (
        <div className="flex justify-around items-center">
           <div className="flex mr-4">
                <button onClick={handleLess}>-</button>
                    <span className="mx-2">{amount}</span>
                <button onClick={handleMore}>+</button>
           </div>

            <button className="item__detail__card__add flex justify-center" onClick={() => handleAdd(amount)}><span>Agregar al carrito</span></button>
        </div>
    )
}
