import React, {useContext} from 'react';
import { Redirect } from 'react-router';
import { CartContext } from '../../contexts/CartContext';
import { generateOrder } from '../../helpers/generateOrder';
import Swal from 'sweetalert2';
import { Form } from '../../containers/Form/Form';
import { Spinner } from '../Spinner/Spinner';
import { UIContext } from '../../contexts/UIContext';

export const Checkout = () => {

    const { cart, totalItemsAmount, emptyCart, totalSpent } = useContext(CartContext);
    const {loading, setLoading} = useContext(UIContext);

    const values = {
        name: '',
        lastName: '',
        email: '',
        reEmail: '',
        tel: ''
    };
    
    const processOrder = (values) => {
        setLoading(true);
        generateOrder(values, cart, totalItemsAmount())
            .then((res) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Orden registrada',
                    text: `Guardá tu número de compra ${res}`,
                    willClose: () => {
                        emptyCart();
                    }
                  })
            })
            .catch((err) => {
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Producto sin stock',
                  })
            })
            .finally(() => setLoading(false));
    }

    return (

       <div className="flex justify-center">
        {cart.length === 0 && <Redirect to="/"/>}
        
            <div id="summary" className="w-1/4 items-center px-8 py-10">
                <h1 className="form__input__div font-semibold text-2xl pb-8">Detalle del pedido</h1>
                <div className="flex justify-between py-6">
                    <span className="font-semibold text-sm uppercase">Cantidad total:</span>
                    <span>{totalItemsAmount()} producto(s)</span>
                </div>
                { 
                    cart.map( (item) => 
                     <div className="flex flex-col px-4 py-4">
                        <h3 className="flex justify-between text-xs"><span>Item:</span> <span>{item.name}</span></h3>
                        <h3 className="flex justify-between text-xs"><span>Cantidad:</span> <span>{item.amount}</span></h3>
                    </div>
                    )
                }
                <div className="">
                    <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                        <span>Total</span>
                        <span>${ totalSpent() }</span>
                    </div>
                </div>
            </div>

            <Form formTitle={'Completá tus datos'} inputs={values} processOrder={processOrder} loading={loading}/>

            {loading && <Spinner/>}

       </div>
    )
}
