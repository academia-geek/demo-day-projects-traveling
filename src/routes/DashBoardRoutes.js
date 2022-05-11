import { Route, Routes, Navigate } from 'react-router-dom'
import Anfitrion from '../components/Anfitrion'
import { Detalle } from '../components/Detalle'
import Footer from '../components/Footer'
import Guias from '../components/Guias'
import Home from '../components/Home'
import ListarEstadias from '../components/ListarEstadias'
import NavBar from '../components/NavBar'


const DashBoardRoutes = ({ isHost }) => {

    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/estadias" element={<ListarEstadias />} />
                <Route path="/estadia/:id" element={<Detalle />} />
                <Route path="/anfitrion" element={<Anfitrion />} />
                <Route path="/guias" element={<Guias />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default DashBoardRoutes