import React, {useState} from 'react';
import { WarningWidget } from '../../components/Widgets/WarningWidget/WarningWidget';

export const Form = ({formTitle, inputs, inputsObject, processOrder, loading}) => {

    const [values, setValues] = useState(inputs);
    const [errorMessage, setErrorMessage] = useState('');
    const [errorField, setErrorField] = useState('');
    const emailRegex = /^[a-zA-Z0-9ñÑ.-]+@[a-zA-Z0-9ñÑ.-]+\.\w{2,4}\b/;
    const telRegex = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;

    //ver porqué cuando paso inputsObject como prop desde Checkout pincha viene como undefined

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        
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
        if (!emailRegex.test(values.email)) {
            setErrorField('email');
            setErrorMessage('Ingresá un email válido');
            return
        }
        if (values.reEmail !== values.email) {
            setErrorField('reEmail');
            setErrorMessage('Los emails no coinciden');
            return
        }
        if (!telRegex.test(values.tel)) {
            setErrorField('tel');
            setErrorMessage('Ingresá un teléfono válido');
            return
        }

        processOrder(values);
    }

    return (

        <form onSubmit={handleSubmit} className="w-full max-w-sm self-center px-8 py-10">
            <h2 className="font-semibold text-2xl pb-8">{formTitle}</h2>

            {inputsObject && 
                inputsObject.map((input) => (
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
                        <small className={`error flex justify-end ${errorField === input.name ? 'block' : 'hidden'}`}><WarningWidget/>{errorMessage}</small>
                    </>
                    )
                ) 
            }

            <button className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded mt-4" type="submit" disabled={loading}>Comprar</button>
        </form>
    )
}
