import { Route, Routes, Navigate } from 'react-router-dom'
import Anfitrion from '../components/Anfitrion'
import { Detalle } from '../components/Detalle'
import Footer from '../components/Footer'
import Home from '../components/Home'
import ListarEstadias from '../components/ListarEstadias'


const DashBoardRoutes = ({ isHost }) => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/estadias" element={<ListarEstadias />} />
                <Route path="/estadia/:id" element={<Detalle />} />
                <Route path="/anfitrion" element={<Anfitrion />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer/>
        </div>
    )
}

export default DashBoardRoutes