import { Formik } from "formik";
import * as yup from "yup";
import React, { useState } from "react";
import { BsFacebook, BsGoogle } from 'react-icons/bs'
import { useDispatch } from "react-redux";
import { registerAsync } from "../Redux/actions/registerActions";
import { ContainerForm, Error, LoginGoogleFace } from "../styles/styledComp/formsStyle";
import { loginGoogle } from "../Redux/actions/loginActions";
import { Link } from 'react-router-dom'
import { fileUpload } from "../helpers/fileUpload";
import Swal from "sweetalert2";

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

	const [imgGuia, setImgGuia] = useState('')

	const handleGoogle = () => {
		dispatch(loginGoogle())
	}

	const handleFileChanged = (e) => {
		const file = e.target.files[0];
		fileUpload(file)
			.then((response) => {
				console.log(response);
				Swal.fire({
					icon: 'success',
					title: 'Imagen subida',
					showConfirmButton: false,
					timer: 1500
				})
				setImgGuia(response)
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<ContainerForm>
			<img className="logoImg" src="https://res.cloudinary.com/dainl1ric/image/upload/v1651120998/bird_2_djvrbx.png" alt="bird-icon" />
			<h1>REGISTRATE</h1>
			<Formik
				initialValues={{
					name: "",
					password: "",
					password2: "",
					email: "",
					host: false,
					guia: false,
					contacto: '',
				}}
				validationSchema={schema}
				onSubmit={({ name, password, password2, email, host, guia, contacto }) => {
					dispatch(registerAsync({ name, password, password2, email, host, guia, imgGuia, contacto }));
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

						<label>
							<input
								type="checkbox"
								name="host"
								placeholder="rol"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.host}
							/>
							<strong> Ser Hospedador</strong> (Publicar estadias)
						</label>

						<label>
							<input
								type="checkbox"
								name="guia"
								placeholder="rol"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.guia}
							/>
							<strong> Ser Guia </strong>
						</label>

						{values.guia ? <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
							<p>Imagen de perfil</p>
							<input
								type="file"
								name="imgGuia"
								onChange={handleFileChanged}
								onBlur={handleBlur}
								value={values.imgGuia}
							/>

							<input
								type="number"
								name="contacto"
								placeholder="Numero de contacto"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.contacto}
							/>
						</div>


							: null}

						<button type="submit">
							Registrarse
						</button>

						<LoginGoogleFace>
							<div onClick={handleGoogle} className='iconContainer iconContainerGoogle'><BsGoogle className='icon iconGoogle' /> <p>Inicia Sesión con Google</p></div>
							<div className='iconContainer iconContainerFacebook'><BsFacebook className='icon iconFacebook' /> <p>Inicia Sesión con Facebook</p></div>
						</LoginGoogleFace>

						<p>¿Ya tienes cuenta? <Link to="/login"> Inicia sesión aquí</Link></p>
					</form>
				)}
			</Formik>
		</ContainerForm>
	);
};

export default Register;
