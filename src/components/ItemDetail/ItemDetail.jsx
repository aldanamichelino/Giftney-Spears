import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';


export const ItemDetail = ({ id, name, price, img, description, imgDescription, category, error }) => {

    const {goBack, push} = useHistory();

    return (
            <>
                <div className="min-w-screen flex items-center overflow-hidden relative">

                        <div className={`item__detail__card w-full max-w-6xl rounded-br-lg shadow-xl p-10 lg:p-10 mx-auto relative md:text-left ${error ? "flex" : "hidden"} items-center justify-center flex-col`}>
                            <p className="error mb-4">{ error }</p>
                            <button className="item__detail__card__buttonBack opacity-75 hover:opacity-100 hover:text-gray-900 rounded px-5
                                py-2 font-semibold" onClick={() => goBack()}>Volver</button>
                        </div>
                        
                
                        <div className={`item__detail__card w-full max-w-6xl rounded-br-lg shadow-xl p-10 lg:p-10 mx-auto relative md:text-left ${error ? "hidden" : "block"}`}>
                            <div className="md:flex items-stretch -mx-10">
                                <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                                    <div className="relative">
                                        <img src={img} className="item__detail__card__img w-full relative z-10 rounded" alt={imgDescription}/>
                                        <div className="border-4 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 px-10">
                                    <div className="mb-20">
                                        <h2 className="font-bold uppercase text-2xl mb-5">{name}</h2>
                                        <p className="text-sm">{description}</p>
                                    </div>
                                    <div className="flex justify-end items-center">
                                        <div className="inline-block align-bottom mr-5">
                                                <span className="text-2xl leading-none align-baseline">$</span>
                                                <span className="item__detail__card__price font-bold text-3xl leading-none align-baseline">{price}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex justify-center">
                                        <div className="relative inline-flex items-end mr-8">
                                            <svg className="w-2 h-2 absolute top-18 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fillRule="nonzero"/></svg>
                                            <select className="item__detail__card__amount border h-10 pl-5 pr-5 focus:outline-none appearance-none">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                            </select>
                                        </div>

                                        <Link to="/carrito" className="item__detail__card__add flex justify-center mt-20"><span>Agregar al carrito</span></Link>
                                    </div>
                                    
                                </div>
                                <div className="flex w-full align-bottom justify-end absolute bottom-6 right-8">
                                        <button className="item__detail__card__buttonBack opacity-75 hover:opacity-100 hover:text-gray-900 rounded px-5
                                        py-2 font-semibold" onClick={() => goBack()}>Volver</button>
                                        <button className="item__detail__card__buttonBack opacity-75 hover:opacity-100 hover:text-gray-900 rounded px-5
                                        py-2 font-semibold ml-4" onClick={() => push('/')}>Home</button>
                                </div>
                            </div>
                        </div>
                </div>
            </>
        )
}
