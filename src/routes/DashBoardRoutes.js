import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import Logout from '../components/Logout'

const DashBoardRoutes = ({ isAuth }) => {
    return (
        <div>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path="/home" element={<Home/>}/>
                <Route path="/" element={<Logout />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    )
}

export default DashBoardRoutes