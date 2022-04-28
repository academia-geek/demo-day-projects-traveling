import { Formik } from "formik";
import * as yup from "yup";
import React from "react";
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import { useDispatch } from "react-redux";
import { registerAsync } from "../Redux/actions/registerActions";
import { ContainerForm, Error, LoginGoogleFace } from "../styles/styledComp/formsStyle";
import { loginGoogle } from "../Redux/actions/loginActions";

let schema = yup.object().shape({
	name: yup.string().required("Campo Requerido"),
	password: yup.string().min(6, 'La contraseña no debe ser menor a 6 caracteres').required("Campo Requerido"),
	password2: yup.string().min(6, 'La contraseña no debe ser menor a 6 caracteres').oneOf([yup.ref('password')], 'Las contraseñas no coinciden').required("Campo Requerido"),
	email: yup
		.string()
		.email("Debe escribir un correo valido")
		.required("Campo Requerido"),
});

const Register = () => {
	const dispatch = useDispatch();

	const handleGoogle = () => {
		dispatch(loginGoogle())
}

	return (
		<ContainerForm>
			<h1>Register</h1>
			<Formik
				initialValues={{
					name: "",
					password: "",
					password2: "",
					email: "",
				}}
				validationSchema={schema}
				onSubmit={(values) => {
					dispatch(registerAsync(values));
					console.log(values);
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
							name="name"
							placeholder="User Name"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.name}
						/>
						{errors.name && touched.name ? (
							<Error>{errors.name}</Error>
						) : null}

						<input
							type="password"
							name="password"
							placeholder="Contraseña"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
						/>
						{errors.password && touched.password ? (
							<Error>{errors.password}</Error>
						) : null}

						<input
							type="password"
							name="password2"
							placeholder="Repite la contraseña"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password2}
						/>
						{errors.password2 && touched.password2 ? (
							<Error>{errors.password2}</Error>
						) : null}

						<input
							name="email"
							placeholder="Correo"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
						/>
						{errors.email && touched.email ? (
							(<Error>{errors.email}</Error>)
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
		</ContainerForm>
	);
};

export default Register;
