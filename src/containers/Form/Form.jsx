import React, {useState, useContext} from 'react';
import { UIContext } from '../../contexts/UIContext';

export const Form = ({inputs, processOrder}) => {


    //modificarlo para que la cantidad de inputs sea dinámico

    const [values, setValues] = useState(inputs);

    console.log(values.name);

    //ver porqué cuando paso inputsObject como prop desde Checkout pincha viene como undefined

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
            name: 'telephone',
            value: values.telephone,        
        },
    ];

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
        
        if (values.name.length < 3) {
            alert("Nombre inválido")
            return
        }
        if (values.lastName.length < 3) {
            alert("Apellido inválido")
            return
        }
        if (values.email.length < 3) {
            alert("Email inválido")
            return
        }
        if (values.reEmail.value !== values.email.value) {
            alert("Los emails no coinciden")
            return
        }
        if (values.tel.length < 7) {
            alert("Teléfono inválido")
            return
        }

        processOrder(values);
    }

    return (
        <div className="container my-2">

            <form onSubmit={handleSubmit}>
                
                {inputsObject.map((input) => (
                   <input
                        className="my-2"
                        type={input.type} 
                        placeholder={input.placeholder}
                        name={input.name}
                        value={input.value}
                        onChange={handleInputChange}
                    />
                    )
                )}

                <button type="submit">Enviar</button>
            </form>
            
        </div>
    )
}
