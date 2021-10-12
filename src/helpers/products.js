import { stock } from "../data/stock";

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(stock)
            //reject(rechazado)
        }, 2000);
    });
}

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(stock.find( prod => prod.id === Number(id)));
            // reject(new Error('Oops! Ese id de producto no existe.'))
        }, 2000);
    });
}