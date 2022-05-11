import { Formik } from 'formik';
import * as yup from 'yup';
import React from 'react'
import { BsFacebook, BsGoogle } from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { loginAsync, loginGoogle } from '../Redux/actions/loginActions';
import { ContainerForm, Error, LoginGoogleFace } from '../styles/styledComp/formsStyle';
import { Link } from 'react-router-dom';

let schema = yup.object().shape({
    email: yup.string().email('Debe escribir un correo valido').required('Campo Requerido'),
    password: yup.string().required('Campo Requerido')
});

const Login = () => {

    const dispatch = useDispatch()

    const handleGoogle = () => {
        dispatch(loginGoogle())
    }

    return (
        <ContainerForm>
            <img className="logoImg" src="https://res.cloudinary.com/dainl1ric/image/upload/v1651120998/bird_2_djvrbx.png" alt="bird-icon" />
            <h1>INICIA SESIÓN</h1>
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
                        />
                        {errors.email && touched.email ? (
                            <Error>{errors.email}</Error>
                        ) : null}

                        <input
                            type="password"
                            name="password"
                            placeholder='Password'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        {errors.password && touched.password ? (
                            <Error>{errors.password}</Error>
                        ) : null}

                        <button type="submit">
                            Iniciar Sesión
                        </button>



                        <LoginGoogleFace>
                            <div onClick={handleGoogle} className='iconContainer iconContainerGoogle'><BsGoogle className='icon iconGoogle' /> <p>Inicia Sesión con Google</p></div>
                            <div className='iconContainer iconContainerFacebook'><BsFacebook className='icon iconFacebook' /> <p>Inicia Sesión con Facebook</p></div>
                        </LoginGoogleFace>

                        <p>¿No tienes cuenta? <Link to="/register"> Registrate aquí</Link></p>
                    </form>
                )}
            </Formik>

        </ContainerForm>
    )
}

export default Login