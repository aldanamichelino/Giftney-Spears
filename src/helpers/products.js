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
            stock.find( prod => prod.id === Number(id)) ?
            resolve(stock.find( prod => prod.id === Number(id))) :
            reject('Oops! Este id de producto no existe. Si querés, contactate con nosotros.');
        }, 2000);
    });
}