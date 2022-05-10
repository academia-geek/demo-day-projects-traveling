import { Route, Routes, Navigate } from 'react-router-dom'
import { Detalle } from '../components/Detalle'
import Home from '../components/Home'


const DashBoardRoutes = ({ isHost }) => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/estadia/:id" element={<Detalle />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    )
}

export default DashBoardRoutes