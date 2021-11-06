import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { ItemCounter } from '../../containers/ItemCounter/ItemCounter';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';


export const ItemDetail = ({ id, name, price, img, description, imgDescription, category, stock, error }) => {

    const {goBack} = useHistory();

    const { addItemToCart, isInCart } = useContext(CartContext);

    const handleAdd = (amount) => {

        const newItem = {
            id,
            name,
            price,
            img,
            imgDescription,
            category,
            stock,
            amount
        }

        addItemToCart(newItem, amount);

    }

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
                                    <div className="mb-24">
                                        <h2 className="font-bold uppercase text-2xl mb-5">{name}</h2>
                                        <p className="text-sm">{description}</p>

                                        <div className="flex align-bottom mr-5 justify-end mt-4">
                                                <span className="text-2xl leading-none align-baseline">$</span>
                                                <span className="item__detail__card__price font-bold text-3xl leading-none align-baseline">{price}</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-around items-center">
                                        <ItemCounter stock={stock} handleAdd={handleAdd} buttonText={'Agregar al carrito'}/>
                                    </div>
                                    
                                    <div className="flex flex-col items-center mt-20">
                                            
                                        <div className="flex justify-around my-4">
                                            <Link to="/" className="item__detail__keep__buying flex items-center mr-4 rounded-md">
                                                <svg className="cart__arrow__back fill-current mr-2 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
                                                <span className="">Seguir comprando</span>
                                            </Link>

                                            <Link to="/carrito" className={`item__detail__buy__cart rounded-md ${!isInCart(id) ? 'disabled' : ''}`}>Finalizar compra</Link>
                                        </div>

                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                </div>
            </>
        )
}
