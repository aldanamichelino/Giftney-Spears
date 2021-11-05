import React, {useState, useContext} from 'react';
import { Redirect } from 'react-router';
import { CartContext } from '../../contexts/CartContext';
import { generateOrder } from '../../firebase/generateOrder';
import Swal from 'sweetalert2';
import { Form } from '../../containers/Form/Form';

//importar el form y pasarle los datos de forma dinámica, ver dónde se consume para modificar datos en los padres

export const Checkout = () => {

    const { cart, totalItemsAmount, emptyCart, totalSpent } = useContext(CartContext);

    const values = {
        name: '',
        lastName: '',
        email: '',
        reEmail: '',
        tel: ''
    };

    
    
    const processOrder = (values) => {
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
            // .finally(() => setLoading(false));
    }

    return (

       <div className="flex justify-center">
        {cart.length === 0 && <Redirect to="/"/>}
        {/* chequear que al hacer loading no se pueda volver a apretar enviar */}
        {/* {loading && <Spinner/>} */}
            <div id="summary" className="w-1/4 items-center px-8 py-10">
                <h1 className="form__input__div font-semibold text-2xl pb-8">Detalle del pedido</h1>
                <div className="flex justify-between py-6">
                    <span className="font-semibold text-sm uppercase">Cantidad total:</span>
                    <span>{totalItemsAmount()} producto(s)</span>
                    {/* <span className="font-semibold text-sm">${ price }</span> */}
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

            <Form inputs={values} processOrder={processOrder}/>

            {/* <form onSubmit={handleSubmit} className="w-full max-w-sm self-center px-8 py-10">
                <h2 className="font-semibold text-2xl pb-8">Completá tus datos</h2>
                <div className="form__input__div flex flex-col items-center py-2">
                    <input 
                        className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" 
                        placeholder="Nombre"
                        aria-label="Nombre" 
                        name="name" 
                        value={values.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form__input__div flex flex-col items-center py-2">
                    <input 
                        className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" 
                        placeholder="Apellido"
                        aria-label="lastNameo" 
                        name="lastName" 
                        value={values.lastName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form__input__div flex flex-col items-center py-2">      
                    <input 
                        className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" 
                        placeholder="Email"
                        aria-label="Email" 
                        name="Email" 
                        value={values.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form__input__div flex flex-col items-center py-2">
                    <input 
                        className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" 
                        placeholder="Repetí tu email"
                        aria-label="reEmail" 
                        name="reEmail" 
                        value={values.reEmail}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form__input__div flex flex-col items-center py-2">
                    <input 
                        className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" 
                        placeholder="Teléfono"
                        aria-label="Teléfono" 
                        name="tel" 
                        value={values.tel}
                        onChange={handleInputChange}
                    />
                </div>
                    <button 
                    className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded mt-4" 
                    type="submit"
                    disable={loading}>
                    Realizar compra
                    </button>
            </form> */}
       </div>
    )
}
