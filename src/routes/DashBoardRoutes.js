import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Login from '../components/Login'
import Register from '../components/Register'

const DashBoardRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    )
}

export default DashBoardRoutes