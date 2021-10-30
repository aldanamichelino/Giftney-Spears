import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const init = JSON.parse(localStorage.getItem('cart')) || [];

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(init);

    const addItemToCart = (item, amount) => {
        //implementar un control para de no agregue más que lo hay en stock
        const itemIndexInCart = cart.findIndex(existingItem => existingItem.id === item.id);

        let updatedCart = [...cart];
        
        if(itemIndexInCart !== -1){
            updatedCart[itemIndexInCart].amount += amount;
        } else {
            updatedCart = [...cart, item];
        }

        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    
    const removeItemFromCart = (itemId) => {
        const newCart = cart.filter((item) => item.id !== itemId);
        setCart(newCart);
    }

    const totalItemsAmount = () => {
       return cart.reduce((acc, item) => acc + item.amount, 0);
    }

    const totalSpent = () => {
        return cart.reduce((acc, item) => acc + item.amount * item.price, 0);
    }

    const isInCart = (itemId) => {
        return cart.some((item) => item.id === itemId);
    }    

    const emptyCart = () => {
        setCart([]);
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);



    return (
        <CartContext.Provider value={{cart, addItemToCart, removeItemFromCart, totalItemsAmount, totalSpent, emptyCart, isInCart}}>
            { children }
        </CartContext.Provider>
    )
}
