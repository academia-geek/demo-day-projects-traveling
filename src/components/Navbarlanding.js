import React, { useState } from 'react'
import '../styles/CSS/styleNavBar.css'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAsync } from '../Redux/actions/loginActions'

import { Button, Offcanvas } from 'react-bootstrap'
import UsePerfil from '../hooks/usePerfil'
import { searchAsync } from '../Redux/actions/estadiaAction'
import { Link } from 'react-router-dom'

const Navbarlanding = () => {

    const user = UsePerfil()
    const dispatch = useDispatch()
    const [modal, setModal] = useState(false)

    const agregar = () => {
        setModal(true)
    }

    const handleLogout = () => {
        dispatch(logoutAsync())
    }
    function OffCanvasExample({ name, ...props }) {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <>
                <Button variant="primary" onClick={handleShow} className="me-2" style={{backgroundColor: "#488FB1",
                border: "none",
                borderRadius: "20px",

                margin: "0px 10px",
                color: "white"}}>
                    <img src="https://res.cloudinary.com/travelingimg/image/upload/v1652290251/666201_mowcru.png" className='perfil'/>
                </Button>
                <Offcanvas show={show} onHide={handleClose} {...props} style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Mi Cuenta</Offcanvas.Title>
                        <button className="btn-login" onClick={handleLogout}>
                            <img src="https://res.cloudinary.com/dainl1ric/image/upload/v1651121411/login_1_o1jahq.png" alt="" className="img-btn-login" />
                            Logout
                        </button>
                    </Offcanvas.Header>
                    <Offcanvas.Body style={{ display: "flex", alignItems: "center", flexDirection: "column", gap: "10px"}}>
                        {user.foto !== null
                            ? <img style={{
                                borderRadius: "100px",
                                border: "1px solid gray",
                                
                            }} src={user.foto} alt="fotoPerfil" />
                            : (<img className="imgUser" src="https://res.cloudinary.com/dainl1ric/image/upload/v1651121411/login_1_o1jahq.png" alt="fotoPerfil" />)}
                        <h2  style={{fontSize: "15px", textAlign:"center"}}>{user.nombre}</h2>
                        <h4  style={{fontSize: "15px", textAlign:"center"}}>{user.correo}</h4>
                        <hr style={{width: "320px", backgroundColor: "gray"}}/>
                        <h4  style={{fontSize: "16px", textAlign:"center"}}>Estadías agendadas</h4>
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        );
    }


    const handleChange = ({ target }) => {
        dispatch(searchAsync(target.value))
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    const { host } = useSelector(store => store.login)

    return (
        <div>
        <header className='header'>
            <nav className="navbar">
                <div className="div-img-navbar">
                    <a href="/" className="div-a-navbar-img"><img src="https://res.cloudinary.com/dainl1ric/image/upload/v1651119791/bird_1_omobzp.png" alt="" className="img-home" /> <p>Traveling</p> </a>
                </div>

                <div className="div-ul-nav">
                    <ul className="ul-opciones">

                        <li><Link to="/anfitrion">Se anfitrion</Link></li>
                        <li><Link to="/nosotros">Nosotros</Link></li>
                    </ul>
                </div>
                <div className="div-sesion">
                    <a href="/login"><img src="https://res.cloudinary.com/travelingimg/image/upload/v1652290251/666201_mowcru.png" className='perfil-2'/></a> 
                </div>
            </nav>
        </header>

        </div>
    )

}

export default Navbarlanding