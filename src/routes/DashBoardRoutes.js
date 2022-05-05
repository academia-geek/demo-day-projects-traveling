import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Logout from '../components/Logout'

const DashBoardRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Logout />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    )
}

export default DashBoardRoutes