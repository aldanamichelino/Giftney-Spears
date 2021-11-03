import 'firebase/firestore';
import { getFirestore } from './config';
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
                            //redireccionar a un mensaje de success compra mostrando el id de la compra
                        });
                } else {
                    reject(outOfStock);
                }
            })

    })




    

        // cart.forEach((item) => {
            //     const docRef = db.collection('items').doc(item.id);
            //     docRef.get()
            //         .then((doc) => {
            //            if(doc.data().stock >= item.amount){
            //             docRef.update({
            //                 stock: doc.data().stock - item.amount
            //             })
            //            } else{
            //                 Swal.fire({
            //                     icon: 'error',
            //                     title: 'No hay stock suficiente de este producto',
            //                 })
            //            }
            //         })
            // })
}
