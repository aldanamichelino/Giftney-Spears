import React, {useState} from 'react';


export const ItemCounter = ({ stock, handleAdd, buttonText }) => {

    const [amount, setAmount] = useState(1);

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
           <div className="flex mr-4 items-center">
                <button className="counter__control" onClick={handleLess}>-</button>
                    <span className="mx-2">{amount}</span>
                <button className="counter__control" onClick={handleMore}>+</button>
           </div>

            <button disabled={amount < 1 ? true : ''} className="item__detail__card__add flex justify-center rounded-md"  onClick={() => handleAdd(amount)}><span>{buttonText}</span></button>
        </div>
    )
}
