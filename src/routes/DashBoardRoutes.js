import { Route, Routes, Navigate } from 'react-router-dom'
import { Detalle } from '../components/Detalle'
import Footer from '../components/Footer'
import Guias from '../components/Guias'
import ListarEstadias from '../components/ListarEstadias'
import NavBar from '../components/NavBar'


const DashBoardRoutes = ({ isHost }) => {

    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<ListarEstadias />} />
                <Route path="/estadia/:id" element={<Detalle />} />
                <Route path="/guias" element={<Guias />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default DashBoardRoutes