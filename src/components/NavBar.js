import React, { useEffect, useState } from 'react'
import '../styles/CSS/styleNavBar.css'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAsync } from '../Redux/actions/loginActions'
import AddEstadia from './AddEstadia'
import { Button, Form, Offcanvas } from 'react-bootstrap'
import UsePerfil from '../hooks/usePerfil'
import { filterPriceAsync, searchAsync } from '../Redux/actions/estadiaAction'
import { Link } from 'react-router-dom'
import ListarReservas from './ListarReservas'
import { listReservasAsync } from '../Redux/actions/userActions'

const NavBar = () => {

    const user = UsePerfil()
    const dispatch = useDispatch()
    const [modal, setModal] = useState(false)

    useEffect(() => {
        dispatch(listReservasAsync(user.correo))
    }, [user.correo])

    const { reservasUser } = useSelector(store => store.user)
    console.log(reservasUser)

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
                <Button variant="primary" onClick={handleShow} className="me-2 btn-sesion" style={{backgroundColor: "#488FB1",
                border: "none",
                borderRadius: "50%",
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
                    <Offcanvas.Body style={{ display: "flex", alignItems: "center", flexDirection: "column", gap: "10px" }}>
                        {user.foto !== null
                            ? <img style={{
                                borderRadius: "100px",
                                border: "1px solid gray",

                            }} src={user.foto} alt="fotoPerfil" />
                            : (<img className="imgUser" src="https://cdn-icons-png.flaticon.com/512/1361/1361728.png" alt="fotoPerfil" style={{
                                width: '80px'
                            }} />)}
                        <h2 style={{ fontSize: "15px", textAlign: "center" }}>{user.nombre}</h2>
                        <h4 style={{ fontSize: "15px", textAlign: "center" }}>{user.correo}</h4>
                        <hr style={{ width: "320px", backgroundColor: "gray" }} />
                        <h4 style={{ fontSize: "16px", textAlign: "center" }}>Estadías agendadas</h4>


                        {reservasUser !== undefined ? <ListarReservas toList={reservasUser} /> : null}
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

    const selectChange = ({ target }) => {
        dispatch(filterPriceAsync(target.value))
    }

    const { host } = useSelector(store => store.login)

    return (
        <header className='header'>
            <nav className="navbar">
                <div className="div-img-navbar">
                    <a href="/" className="div-a-navbar-img"><img src="https://res.cloudinary.com/dainl1ric/image/upload/v1651119791/bird_1_omobzp.png" alt="" className="img-home" /> <p>Traveling</p> </a>
                </div>

                <div className="div-ul-nav">
                    <ul className="ul-opciones">
                        <li><Link to="/estadias">Estadias</Link></li>
                        <li><Link to="/nosotros">Nosotros</Link></li>
                        <li><Link to="/guias">Guías</Link></li>
                        { host === true ? <li onClick={agregar}><a href="#">Agregar Estadía</a></li> : null}
                    </ul>
                </div>
                <div className="div-buscar">
                    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
                        <img src="https://res.cloudinary.com/dainl1ric/image/upload/v1651107696/search-removebg-preview_dcrux1.png" alt="buscar" className="img-buscar" />
                        <input
                            type="text"
                            className="input-buscar"
                            onChange={handleChange}
                        />

                        <Form.Select onChange={selectChange}>
                            <option>Todos los precios</option>
                            <option value="50000">Menos de 50000</option>
                            <option value="100000">Menos de 100000</option>
                            <option value="150000">Menos de 150000</option>
                            <option value="200000">Menos de 200000</option>
                            <option value="500000">Menos de 500000</option>
                            <option value="700000">Menos de 700000</option>
                        </Form.Select>
                    </form>

                    {['end'].map((placement, idx) => (
                        <OffCanvasExample key={idx} placement={placement} name={placement} />
                    ))}

                </div>
            </nav>
            {modal === true ? <AddEstadia /> : ""}
        </header>
    )

}

export default NavBar