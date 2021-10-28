import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const init = JSON.parse(localStorage.getItem('cart')) || [];

export const CartProvider = ({ children }) => {


    const [cart, setCart] = useState(init);

    console.log(cart);

    const addItemToCart = (item, amount) => {
            if(isInCart(item.id)){

                return cart.map((existingItem) => existingItem.id === item.id ? {...existingItem, amount: existingItem.amount + amount} : item)
                
            } else {

                setCart( [...cart, item]);
            }
    }

    // setCart((cart) => cart.map((existingItem) => existingItem.id === item.id ? {...existingItem, amount: existingItem.amount + amount} : item));
    // ;
    
    const removeItemFromCart = (itemId) => {
        const newCart = cart.filter((item) => item.id !== itemId);
        setCart(newCart);
    }

    const setAmount = (item, amount) => {
       
        console.log(cart);
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
        <CartContext.Provider value={{cart, addItemToCart, removeItemFromCart, totalItemsAmount, setAmount, totalSpent, emptyCart, isInCart}}>
            { children }
        </CartContext.Provider>
    )
}
