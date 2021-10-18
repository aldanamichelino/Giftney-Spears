import React from 'react';

export const ItemCounter = ({ amount, modifyAmount, stock }) => {


    const handleLess = () => {
        if(amount > 1){
            modifyAmount(amount - 1);
        }
    }

    const handleMore = () => {
        if(amount < stock){
            modifyAmount(amount + 1);
        }
    }


    return (
        <div className="flex items-center">
            <button onClick={handleLess}>-</button>
                <span className="mx-2">{ amount }</span>
            <button onClick={handleMore}>+</button>
        </div>
    )
}
