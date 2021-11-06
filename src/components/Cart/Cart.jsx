import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { CartItem } from '../CartItem/CartItem';

export const Cart = () => {

    const { cart, emptyCart, removeItemFromCart, totalItemsAmount, totalSpent } = useContext(CartContext);

    return (
        <div className="container mx-auto">
            <div className="cart__background flex justify-center">
                {totalItemsAmount() > 0 
                ?
                <div className="w-3/4 items-center bg-white px-10 py-10">
                    <div className="flex justify-between border-b-2 border-pink-400 pb-8">
                        <h1 className="font-semibold text-2xl">Mi carrito</h1>
                        <h2 className="font-semibold text-2xl">{totalItemsAmount()} producto(s)</h2>
                        <h2 className="font-semibold text-2xl">Total: ${totalSpent()}</h2>
                    </div>
                    <div className="flex mt-10 mb-5">
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Detalles del producto</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Cantidad</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Precio</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                    </div>

                    { 
                        cart.map( (item) => <CartItem {...item} removeItem={removeItemFromCart} key={item.id}/>)
                    }

                    <div className="flex justify-end mt-10 items-center">
                        <Link to="/" className="cart__back flex font-semibold text-sm items-center mr-4 rounded-lg">
                            <svg className="cart__arrow__back fill-current mr-2 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
                            <span className="cart__arrow__back__text">Seguir comprando</span>
                        </Link>

                        <button className="cart__empty flex mr-4 rounded-lg" onClick={emptyCart}>
                            Vaciar carrito
                        </button>

                        <Link to="/checkout" className="cart__finish rounded-lg">Terminar mi compra</Link>
                    </div>
                </div>
                :
                <div className="flex mt-5 mb-5 w-3/4 justify-center items-center">
                    <div className="cart__background flex my-10 items-center">
                        <h3 className="font-semibold text-gray-600 uppercase">No tenés items en tu carrito</h3>
                        <Link to="/" className="flex font-semibold text-sm items-center rounded-lg">
                            <svg className="cart__arrow__back fill-current mr-2 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
                            <span className="cart__back">Volver a comprar</span>
                        </Link>
                    </div>
                </div>

                }
            </div>
        </div>
    )
}
