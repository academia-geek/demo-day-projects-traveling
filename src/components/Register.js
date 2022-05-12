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
import '../styles/css/Login.css'

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
			<div className="div-login">
			<div className='img-icon-login'>
                <img className="logoImg" src="https://res.cloudinary.com/dainl1ric/image/upload/v1651120998/bird_2_djvrbx.png" alt="bird-icon" />
                </div>
			<h1>Registrate</h1>
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

						<button type='submit' className='btn-login'>
                            <span>Registrate</span>
                            <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="37" cy="37" r="35.5" stroke="white" strokeWidth="3"></circle>
                                <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="white"></path>
                            </svg>
                        </button>

						<LoginGoogleFace>
							<div onClick={handleGoogle} className='iconContainer iconContainerGoogle'><BsGoogle className='icon iconGoogle' /> </div>
							<div className='iconContainer iconContainerFacebook'><BsFacebook className='icon iconFacebook' /></div>
						</LoginGoogleFace>

						<p>¿Ya tienes cuenta? <Link to="/login"> Inicia sesión aquí</Link></p>
					</form>
				)}
			</Formik>
			
			</div>
		</ContainerForm>
	);
};

export default Register;
