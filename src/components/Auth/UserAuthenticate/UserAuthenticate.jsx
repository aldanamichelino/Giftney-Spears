import { useState, useContext } from "react";
import { UserAuthContext } from "../../../contexts/UserAuthContext";
import { Form } from '../../../containers/Form/Form';
import { UIContext } from "../../../contexts/UIContext";
import britneyLogin from '../../../assets/static/britney-login.jpg';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export const UserAuthenticate = () => {

    const { login, loginWithGoogle } = useContext(UserAuthContext);
    const {loading, setLoading} = useContext(UIContext);
    const [errorMessage, setErrorMessage] = useState('');
    const [errorField, setErrorField] = useState('');
    const emailRegex = /^[a-zA-Z0-9ñÑ.-]+@[a-zA-Z0-9ñÑ.-]+\.\w{2,4}\b/;
    

    const [values, setValues] = useState({
      email: '',
      password: ''
    });

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

    const submitAction = (values) => {

      if (!emailRegex.test(values.email)) {
        setErrorField('email');
        setErrorMessage('Ingresá un email válido');
        return
      }

      setLoading(true);

      login(values.email, values.password)
      .then((res) =>
      Swal.fire({
        icon: 'success',
        title: "She's so lucky!",
        text: 'Iniciaste sesión correctamente.'
        })
      )
      .catch((err) => 
        Swal.fire({
          icon: 'error',
          title: "Oops, you did it again!",
          text: `Ocurrió un error: ${err}`
        })
      )
      .finally(() => {
        setLoading(false);
      });
      

    }

    const handleLoginGoogle = (e) => {
        e.preventDefault();
        loginWithGoogle();
    }

    return (
      <div className="login flex items-center justify-around max-w-6xl rounded-br-lg shadow-xl mx-auto relative w-full">
          <div className="flex flex-col">
            <small className="login__small">Hit me, baby, one more time!</small>
            <Form formTitle={'Iniciá sesión'} values={values} inputsObject={inputsObject} loading={loading} setValues={setValues} errorField={errorField} errorMessage={errorMessage} submitAction={submitAction} buttonTitle={'Iniciar sesión'}/>
            <button className="login__google__button" type="submit" onClick={handleLoginGoogle}>Iniciar sesión con Google</button>
            <small className="mt-4">¿No tenés cuenta? <Link className="underline" to="/signup">Hacé click acá.</Link></small>
        </div>
        <div className="my-16">
            <img src={britneyLogin} alt="Imagen de Britney Spears en colores, que acompaña la pantalla de login" />
          </div>
      </div>
    );

}