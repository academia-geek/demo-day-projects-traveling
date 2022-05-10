import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Detalle } from '../components/Detalle'
import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'


const DashBoardRoutes = ({ isAuth }) => {
    return (
        <div>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path="/" element={<Home />} />
                <Route path="/estadia/:id" element={<Detalle />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    )
}

export default DashBoardRoutes