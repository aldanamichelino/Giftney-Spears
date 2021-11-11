import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const init = JSON.parse(localStorage.getItem('cart')) || [];

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(init);

    const addItemToCart = (item, amount) => {
        const itemIndexInCart = cart.findIndex(existingItem => existingItem.id === item.id);

        let updatedCart = [...cart];
        
        if(itemIndexInCart !== -1){
            updatedCart[itemIndexInCart].amount += amount;
        } else {
            updatedCart = [...cart, item];
        }

        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));

    }

    
    const removeItemFromCart = (itemId) => {
        const newCart = cart.filter((item) => item.id !== itemId);
        setCart(newCart);
    }

    const itemAmountInCart = (id) => {
        const item = cart.find((item) => item.id === id);
        return item ? item.amount : 0;
    }

    const modifyItemAmountInCart = (id, amount) => {
        const itemIndexInCart = cart.findIndex(existingItem => existingItem.id === id);

        let updatedCart = [...cart];
        
        if(itemIndexInCart !== -1){
            updatedCart[itemIndexInCart].amount = amount;
        }

        setCart(updatedCart);

        localStorage.setItem('cart', JSON.stringify(cart));
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
        <CartContext.Provider value={{cart, addItemToCart, removeItemFromCart, totalItemsAmount, itemAmountInCart, modifyItemAmountInCart, totalSpent, emptyCart, isInCart}}>
            { children }
        </CartContext.Provider>
    )
}
