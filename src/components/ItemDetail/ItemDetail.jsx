import React from 'react';
import { useHistory } from 'react-router';
import { CartWidget } from '../CartWidget/CartWidget';
import { FavoriteWidget } from '../FavoriteWidget/FavoriteWidget';

export const ItemDetail = ({ id, name, price, img, description, imgDescription, category }) => {

    const {goBack, push} = useHistory();

    return (
            <div className="min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
                <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                    <div className="md:flex items-center -mx-10">
                        <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                            <div className="relative">
                                <img src={img} className="w-full relative z-10" alt={imgDescription}/>
                                <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-10">
                            <div className="mb-10">
                                <h2 className="font-bold uppercase text-2xl mb-5">{name}</h2>
                                <p className="text-sm">{description}</p>
                            </div>
                            <div>
                                <div className="inline-block align-bottom mr-5">
                                    <span className="text-2xl leading-none align-baseline">$</span>
                                    <span className="font-bold text-5xl leading-none align-baseline">{price}</span>
                                </div>
                                <div className="inline-block align-bottom">
                                    <button className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button></button>
                </div>
            </div>
        )
}
