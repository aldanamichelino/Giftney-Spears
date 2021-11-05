import React, {useState, useContext, useEffect} from 'react';
import { UIContext } from '../../contexts/UIContext';

export const Form = ({formTitle, inputs, processOrder}) => {

    const [values, setValues] = useState(inputs);
    const [errorMessage, setErrorMessage] = useState('Mensaje de error');

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
            type: 'email',
            placeholder: 'Correo electrónico',
            name: 'email',
            value: values.email,        
        },
        {
            type: 'email',
            placeholder: 'Reintroducí tu correo electrónico',
            name: 'reEmail',
            value: values.reEmail,        
        },
        {
            type: 'text',
            placeholder: 'Teléfono',
            name: 'tel',
            value: values.tel,        
        },
    ];


    const emailRegex = new RegExp(/^[a-zA-Z0-9ñÑ\.-]+@[a-zA-Z0-9ñÑ\.-]+\.\w{2,4}\b/);
    const telRegex = new RegExp(/^[0-9\s\-\+\(\)]+$/);


    //ver porqué cuando paso inputsObject como prop desde Checkout pincha viene como undefined
    //acá iban los inputs

    // const {loading, setLoading} = useContext(UIContext);

    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // setLoading(true);
        
        if (values.name === '') {
            setErrorMessage('Agrega un nombre');
            return
        }
        if (values.lastName === '') {
            setErrorMessage('Agrega un apellido');
            return
        }
        if (!emailRegex.test(values.email.value)) {
            console.log('no paso el test')
            setErrorMessage("Email inválido");
            return
        }
        if (values.reEmail.value !== values.email.value) {
            setErrorMessage('Los emails no coinciden');
            return
        }
        if (!telRegex.test(values.tel.value)) {
            console.log('no paso el test')
            setErrorMessage('Teléfono inválido');
            return
        }

        processOrder(values);
    }

    return (

        <form onSubmit={handleSubmit} className="w-full max-w-sm self-center px-8 py-10">
            <h2 className="font-semibold text-2xl pb-8">{formTitle}</h2>
            
            {inputsObject.map((input) => (
                <>
                    <div className="form__input__div flex flex-col items-center py-2">
                        <input
                            className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type={input.type} 
                            placeholder={input.placeholder}
                            name={input.name}
                            value={input.value}
                            onChange={handleInputChange}
                        />
                    </div>
                    <p>{errorMessage}</p>
                </>
                )
            )}

            <button className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded mt-4" type="submit">Comprar</button>
            {/* disable={loading} */}
        </form>
    )
}
