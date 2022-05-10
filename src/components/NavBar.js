import React, { useState } from 'react'
import '../styles/css/styleNavBar.css'
import { useDispatch } from 'react-redux'
import { logoutAsync } from '../Redux/actions/loginActions'
import { searchAsync } from '../Redux/actions/estadiaAction'
import { Link } from 'react-router-dom'

const NavBar = () => {

    const dispatch = useDispatch()
    const [modal, setModal] = useState(false)


    const agregar = () => {
        setModal(true)
    }

    const handleLogout = () => {
        dispatch(logoutAsync())
    }

    const handleChange = ({ target }) => {
        dispatch(searchAsync(target.value))
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <header className='header'>
         <nav className="navbar">
                    <div className="div-img-navbar">
                    <a href="/" className="div-a-navbar-img"><img src="https://res.cloudinary.com/dainl1ric/image/upload/v1651119791/bird_1_omobzp.png" alt="" className="img-home" /> <p>Traveling</p> </a>
                    </div>
                        
           
            <div className="div-ul-nav">
                <ul className="ul-opciones">
                    <li><a href="default.asp">Descubre</a></li>
                    <li><a href="news.asp">Experiencias</a></li>
                    <li><a href="about.asp">Estadias</a></li>
                    <li><a href="contact.asp">Contactanos</a></li>
                    <li onClick={agregar}><a href="#">Agregar Estadía</a></li>
                </ul>
            </div>
            <div className="div-buscar">
                <img src="https://res.cloudinary.com/dainl1ric/image/upload/v1651107696/search-removebg-preview_dcrux1.png" alt="buscar" className="img-buscar" />
                <input type="text" className="input-buscar" />
                <button className="btn-login" onClick={handleLogout}>
                    <img src="https://res.cloudinary.com/dainl1ric/image/upload/v1651121411/login_1_o1jahq.png" alt="" className="img-btn-login" />
                    Logout
                </button>
            </div>
        </nav>
        {modal === true ? <AddEstadia /> : ""}
    </header>
  )
            
}

export default NavBar