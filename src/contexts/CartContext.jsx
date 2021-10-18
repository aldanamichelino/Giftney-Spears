import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const init = JSON.parse(localStorage.getItem('cart')) || [];

export const CartProvider = ({ children }) => {


    const [cart, setCart] = useState(init);

    const addItemToCart = (item) => {
        setCart( [...cart, item] );
    }

    const removeItemFromCart = (itemId) => {
        const newCart = cart.filter((item) => item.id !== itemId);
        setCart(newCart);
    }

    const totalAmount = () => {
        return cart.reduce((acc, item) => acc + item.amount, 0);
    }

    const emptyCart = () => {
        setCart([]);
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);



    return (
        <CartContext.Provider value={{cart, addItemToCart, removeItemFromCart, totalAmount, emptyCart}}>
            { children }
        </CartContext.Provider>
    )
}
