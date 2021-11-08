import { useState, useContext } from "react";
import { UserAuthContext } from "../../../contexts/UserAuthContext";
import { Form } from '../../../containers/Form/Form';
import { UIContext } from "../../../contexts/UIContext";
import britneyLogin from '../../../assets/static/britney-login.jpg';
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export const SignUp = () => {

    const {signUp} = useContext(UserAuthContext);
    const { push } = useHistory();
    const {loading, setLoading} = useContext(UIContext);
    const [errorMessage, setErrorMessage] = useState('');
    const [errorField, setErrorField] = useState('');
    const emailRegex = /^[a-zA-Z0-9ñÑ.-]+@[a-zA-Z0-9ñÑ.-]+\.\w{2,4}\b/;

    const [values, setValues] = useState({
      email: '',
      password: '',
      rePassword: '',
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
          placeholder: 'Introducí tu contraseña',
          name: 'password',
          value: values.password,        
      },
      {
          type: 'password',
          placeholder: 'Reintroducí tu contraseña',
          name: 'rePassword',
          value: values.rePassword,        
      },
    ];

    const submitAction = (values) => {

      if (!emailRegex.test(values.email)) {
        setErrorField('email');
        setErrorMessage('Ingresá un email válido');
        return
      }
      if (values.password < 5) {
        setErrorField('password');
        setErrorMessage('La contraseña debe tener mínimo 6 caracteres');
        return
      }
      if (values.password !== values.rePassword) {
        setErrorField('rePassword');
        setErrorMessage('Las contraseñas no coinciden');
        return
      }

      setLoading(true);

      signUp(values.email, values.password, values.rePassword)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: "She's so lucky!",
          text: 'Te registraste exitosamente.'
        });
        push('/');
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: "Oops, you did it again!",
          text: `${err}`
        });
      })
      .finally(() => {
        setLoading(false);
      })
    }


    return (
        <div className="login flex items-center justify-around max-w-6xl rounded-br-lg shadow-xl mx-auto relative w-full">
          <div className="flex flex-col">
          <small className="login__small">Hit me, baby, one more  time!</small>
            <Form formTitle={'Registrarme'} values={values} inputsObject={inputsObject} loading={loading} setValues={setValues} errorField={errorField} errorMessage={errorMessage} submitAction={submitAction} buttonTitle={'Registrarme'}/>
            <small className="mt-4">¿Ya tenés cuenta? <Link className="underline" to="/">Hacé click acá.</Link></small>
        </div>
        <div className="my-16">
            <img src={britneyLogin} alt="Imagen de Britney Spears en colores, que acompaña la pantalla de login" />
          </div>
      </div>
    )
}
