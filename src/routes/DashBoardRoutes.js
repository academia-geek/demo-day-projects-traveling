import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

const DashBoardRoutes = ({ isAuth }) => {
    return (
        <div>
            <Routes>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    )
}

export default DashBoardRoutes