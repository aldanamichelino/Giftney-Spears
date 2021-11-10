import 'firebase/firestore';
import { getFirestore } from '../firebase/config';
import firebase from 'firebase';

export const generateOrder = (userData, cart, total) => {
    return new Promise( async (resolve, reject) => {

        const order = {
            buyer: {
                ...userData
            },
            items: cart.map((item) => ({id: item.id, amount: item.amount, price: item.price})),
            total: total,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

            const db = getFirestore();
            const orders = db.collection('orders');
            
            const itemsToUpdate = db.collection('items').where(firebase.firestore.FieldPath.documentId(), 'in', cart.map(item => item.id));
            
            const query = await itemsToUpdate.get();
            const batch = db.batch();
            
            const outOfStock = [];

            query.docs.forEach((doc) => {
                const itemInCart = cart.find(item => item.id === doc.id);
            
                if(doc.data().stock >= itemInCart.amount){
                    batch.update(doc.ref, {stock: doc.data().stock - itemInCart.amount});
                } else {
                    outOfStock.push({...doc.data(), id: doc.id});
                }
            
                if(outOfStock.length === 0){
        
                    orders.add(order)
                        .then((res) => {
                            batch.commit();
                            resolve(res.id);
                        })
                } else {
                    reject(outOfStock);
                }
            })

    })

}
