import { Route, Routes, Navigate } from 'react-router-dom'
import Anfitrion from '../components/Anfitrion'
import { Detalle } from '../components/Detalle'
import Home from '../components/Home'


const DashBoardRoutes = ({ isHost }) => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/estadia/:id" element={<Detalle />} />
                <Route path="/anfitrion" element={<Anfitrion />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    )
}

export default DashBoardRoutes