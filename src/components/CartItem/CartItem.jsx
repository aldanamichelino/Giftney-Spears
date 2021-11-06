import React from 'react';
import { TrashWidget } from '../Widgets/TrashWidget/TrashWidget';
import { Link } from 'react-router-dom';
import { CartItemCounter } from '../../containers/CartItemCounter/CartItemCounter';

export const CartItem = ({id, img, imgDescription, name, category, price, amount, removeItem, stock}) => {


    return (
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <Link to={`/item/${id}`} className="flex w-2/5">
                <div className="w-20">
                    <img className="" src={ img } alt={ imgDescription }/>
                </div>
                <div className="flex flex-col justify-center items-center ml-4 flex-grow">
                    <span className="font-bold text-sm">{ name }</span>
                </div>
            </Link>

            <CartItemCounter stock={stock} id={id}/>
            
            <span className="text-center w-1/5 font-semibold text-sm">${ price }</span>
            <span className="text-center w-1/5 font-semibold text-sm">${ price * amount } </span>

            <button onClick={() => removeItem(id)}>
                <TrashWidget/>
            </button>
        </div>
    )
}
