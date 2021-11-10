import React from 'react';
import { WarningWidget } from '../../components/Widgets/WarningWidget/WarningWidget';

export const Form = ({formTitle, values, inputsObject, loading, setValues, errorField, errorMessage, submitAction, buttonTitle}) => {

    const handleInputChange = (e) => {
        e.preventDefault();
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submitAction(values);
    }

    return (

        <form onSubmit={handleSubmit} className="w-full max-w-sm self-center px-8 py-10">
            <h2 className="font-semibold text-2xl pb-8">{formTitle}</h2>

            {inputsObject && 
                inputsObject.map((input, index) => (
                    <div key={index}>
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
                    </div>
                    )
                ) 
            }

            <button className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded mt-8" type="submit" disabled={loading}>{buttonTitle}</button>
        </form>
    )
}
