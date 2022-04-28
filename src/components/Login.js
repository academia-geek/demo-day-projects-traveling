import { Formik } from 'formik';
import * as yup from 'yup';
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { loginAsync, loginGoogle, logoutAsync } from '../Redux/actions/loginActions';
import { ContainerForm, Error, LoginGoogleFace } from '../styles/styledComp/formsStyle';

let schema = yup.object().shape({
    email: yup.string().email('Debe escribir un correo valido').required('Campo Requerido'),
    password: yup.string().required('Campo Requerido')
});

const Login = () => {

    const dispatch = useDispatch()

    const handleGoogle = () => {
        dispatch(loginGoogle())
    }

    const handleLogout = () => {
        dispatch(logoutAsync())
    }

    return (
        <ContainerForm>
            <h1>Login</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={schema}

                onSubmit={(values) => {
                    dispatch(loginAsync(values))
                    console.log(values)
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
                            Submit
                        </button>



                        <LoginGoogleFace>
                            <FcGoogle className='icon' onClick={handleGoogle} />
                            <BsFacebook className='icon' />
                        </LoginGoogleFace>
                    </form>
                )}
            </Formik>

            <button onClick={handleLogout}>
                Logout
            </button>
        </ContainerForm>
    )
}

export default Login