import { useSelector } from 'react-redux'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../components/Home'

const DashBoardRoutes = ({ isHost }) => {
    
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    )
}

export default DashBoardRoutes