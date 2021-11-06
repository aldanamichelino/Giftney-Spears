import { useContext } from "react";
import { UserAuthContext } from "../../contexts/UserAuthContext";
import { Form } from '../../containers/Form/Form';
import { UIContext } from "../../contexts/UIContext";

export const UserAuthenticate = () => {


  const { login } = useContext(UserAuthContext);

    const {loading, setLoading} = useContext(UIContext);
    

    const values = {
      email: '',
      password: ''
    };

    const inputsObject = [
        {
            type: 'email',
            placeholder: 'Correo electrónico',
            name: 'email',
            value: values.email,        
        },
        {
            type: 'password',
            placeholder: 'Contraseña',
            name: 'password',
            value: values.password,        
        },
    ];

    return (
      <Form formTitle={'Iniciá sesión'} inputs={values} inputsObject={inputsObject} loading={loading} buttonTitle={'Iniciar sesión'}/>
    );
}