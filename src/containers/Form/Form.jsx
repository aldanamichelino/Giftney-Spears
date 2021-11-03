import React, {useState} from 'react';

export const Form = ({inputs}) => { 

    //modificarlo para que la cantidad de inputs sea dinámico

    const [input, setInput] = useState(
       inputs.map(input => input = '')
    );

    const handleInputChange = (e) => {
        setInput({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="container my-2">

            <form onSubmit={handleSubmit}>
                <input
                    className="my-2"
                    type="text" 
                    placeholder="Nombre"
                    name="name"
                    value={values.name}
                    onChange={handleInputChange}
                />
                <input
                    className="my-2"
                    type="text"  
                    placeholder="Apellido"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleInputChange}
                />
                <input
                    className="my-2"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                />
                <input
                    className="my-2"
                    type="email"
                    placeholder="Repetí tu email"
                    name="reEmail"
                    value={values.reEmail}
                    onChange={handleInputChange}
                />

                <button type="submit">Enviar</button>
            </form>
            
        </div>
    )
}
