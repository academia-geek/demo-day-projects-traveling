import { Formik } from 'formik';
import * as yup from 'yup';
import React from 'react'
import { BsFacebook, BsGoogle } from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { loginAsync, loginFacebook, loginGoogle } from '../Redux/actions/loginActions';
import { ContainerForm, Error, LoginGoogleFace } from '../styles/styledComp/formsStyle';
import { Link } from 'react-router-dom';
import '../styles/css/Login.css'

let schema = yup.object().shape({
    email: yup.string().email('Debe escribir un correo valido').required('Campo Requerido'),
    password: yup.string().required('Campo Requerido')
});

const Login = () => {

    const dispatch = useDispatch()

    const handleGoogle = () => {
        dispatch(loginGoogle())
    }

    const handleFacebook = () => {
        dispatch(loginFacebook())
    }

    return (
        <ContainerForm>
            <div className='div-login'>
                <div className='img-icon-login'>
                <img className="logoImg" src="https://res.cloudinary.com/dainl1ric/image/upload/v1651120998/bird_2_djvrbx.png" alt="bird-icon" />
                </div>
            
            <h1>Iniciar Sesión</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={schema}

                onSubmit={(values) => {
                    dispatch(loginAsync(values))
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            name="email"
                            placeholder='Correo'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            className="input-login"
                        />
                        {errors.email && touched.email ? (
                            <Error>{errors.email}</Error>
                        ) : null}

                        <input
                            type="password"
                            name="password"
                            placeholder='Contraseña'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            className="input-login"
                        />
                        {errors.password && touched.password ? (
                            <Error>{errors.password}</Error>
                        ) : null}


                        <button type='submit' className='btn-login'>
                            <span>Ingresar</span>
                            <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="37" cy="37" r="35.5" stroke="white" strokeWidth="3"></circle>
                                <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="white"></path>
                            </svg>
                        </button>



                        <LoginGoogleFace>
                            <div onClick={handleGoogle} className='iconContainer iconContainerGoogle icon-login'><BsGoogle className='icon iconGoogle' /> </div>
                            <div onClick={handleFacebook} className='iconContainer iconContainerFacebook icon-login'><BsFacebook className='icon iconFacebook' /></div>
                        </LoginGoogleFace>

                        <p>¿No tienes cuenta? <Link to="/register"> Registrate aquí</Link></p>
                    </form>
                )}
            </Formik>
            </div>
        </ContainerForm>
    )
}

export default Login