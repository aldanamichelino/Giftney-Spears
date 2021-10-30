import { useContext } from "react";
import { UserAuthContext } from "../../context/UserAuthContext";

export const UserAuthenticate = () => {


    const {login} = useContext(UserAuthContext);

    return (
        <div
      className='container d-flex align-items-center justify-content-space'
      style={{ minHeight: '100vh' }}
    >
      <div className='row d-flex align-items-center justify-content-space'>
        {/* <div className='col'>
              <Animation />
            </div> */}
        <div className='col' style={{ width: '500px' }}>
          <h2 className='text-center mb-4 font-weight-bold'>Log in 🛸</h2>
          <form className='p-0'>
            <div className='form-group mb-2'>
              <label>Email</label>
              <input
                type='email'
                className='form-control'
                placeholder='Ingrese su email'
                name='email'
              />
            </div>
            <div className='form-group mb-2'>
              <label>Password</label>
              <input
                type='password'
                className='form-control'
                placeholder='Ingrese su password'
                name='password'
              />
            </div>
            <button
              type='submit'
              className='btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-4'
            >
              Log in
            </button>
          </form>
          <button
            type='submit'
            className='btn btn-secondary  font-weight-bold text-uppercase d-block w-100  mt-4'
          >
            Log in with Google
          </button>
          <small className='text-center mt-3'>No tenes cuenta? Sign up</small>
        </div>
      </div>
    </div>
    );
}