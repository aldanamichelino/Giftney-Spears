import React, {useContext, useState} from 'react';
import { Redirect } from 'react-router';
import { CartContext } from '../../contexts/CartContext';
import { generateOrder } from '../../helpers/generateOrder';
import Swal from 'sweetalert2';
import { Form } from '../../containers/Form/Form';
import { Spinner } from '../Spinner/Spinner';
import { UIContext } from '../../contexts/UIContext';
import { UserAuthContext } from '../../contexts/UserAuthContext';
import { Link } from 'react-router-dom';

export const Checkout = () => {

    const { currentUser, logout } = useContext(UserAuthContext);
    const { cart, totalItemsAmount, emptyCart, totalSpent } = useContext(CartContext);
    const { loading, setLoading } = useContext(UIContext);
    const [errorMessage, setErrorMessage] = useState('');
    const [errorField, setErrorField] = useState('');
    const telRegex = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;

    const [values, setValues] = useState({
        name: '',
        lastName: '',
        email: currentUser.email,
        reEmail: currentUser.email,
        tel: ''
    });


    const inputsObject = [
        {
            type: 'text',
            placeholder: 'Nombre',
            name: 'name',
            value: values.name,        
        },
        {
            type: 'text',
            placeholder: 'Apellido',
            name: 'lastName',
            value: values.lastName,        
        },
        {
            type: 'text',
            placeholder: 'Teléfono',
            name: 'tel',
            value: values.tel,        
        },
    ];


    const submitAction = (values) => {
        
        if (values.name === '') {
            setErrorField('name');
            setErrorMessage('Ingresá un nombre');
            return
        }
        if (values.lastName === '') {
            setErrorField('lastName');
            setErrorMessage('Ingresá un apellido');
            return
        }
        if (!telRegex.test(values.tel)) {
            setErrorField('tel');
            setErrorMessage('Ingresá un teléfono válido');
            return
        }
    
        setLoading(true);

        generateOrder(values, cart, totalSpent())
            .then((res) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Gracias por tu compra.',
                    text: `Número de orden: ${res}`,
                    willClose: () => {
                        emptyCart();
                    }
                  })
            })
            .catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops! Producto sin stock',
                  })
            })
            .finally(() => setLoading(false));
    }

    return (

       <div className="checkout flex justify-around items-center max-w-6xl rounded-br-lg shadow-xl mx-auto relative w-full p-8">
        {cart.length === 0 && <Redirect to="/"/>}
        
            <div id="summary" className="w-1/2 items-center px-8 py-10">
                <h1 className="form__input__div font-semibold text-2xl pb-8">Detalle del pedido</h1>
                <div className="flex justify-between py-6">
                    <span className="font-semibold text-sm uppercase">Cantidad total:</span>
                    <span>{totalItemsAmount()} producto(s)</span>
                </div>
                <div className="item__summary">
                    { 
                        cart.map( (item) => 
                        <div key={item.id} className="flex flex-col px-4 py-4">
                            <h3 className="flex justify-between text-xs"><span>Item:</span> <span>{item.name}</span></h3>
                            <h3 className="flex justify-between text-xs"><span>Cantidad:</span> <span>{item.amount}</span></h3>
                        </div>
                        )
                    }
                </div>
                <div>
                    <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                        <span>Total</span>
                        <span>${ totalSpent() }</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="checkout__user__details">
                    <p>Estás comprando como</p>
                    <p className="checkout__user__details__email">{currentUser.email}</p>
                    <small className="mt-4">¿No es tu cuenta? <Link className="underline" to="/" onClick={logout}>Hacé click acá.</Link></small>
                </div>
                
                <Form formTitle={'Completá tus datos'} values={values} inputsObject={inputsObject} loading={loading} setValues={setValues} errorField={errorField} errorMessage={errorMessage} submitAction={submitAction} buttonTitle={'Comprar'}/>
            </div>

            {loading && <Spinner/>}

       </div>
    )
}
