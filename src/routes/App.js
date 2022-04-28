import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../components/Login'
import Register from '../components/Register'
import { ContainerLoadingPage, SpinnerLoading } from '../styles/styledComp/loadingPageStyle'
import DashBoardRoutes from './DashBoardRoutes'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

const App = () => {

  const [checking, setchecking] = useState(true)
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogged(true)
      } else {
        setIsLogged(false)
      }
      setchecking(false)
    })
  }, [setIsLogged, setchecking])

  if (checking) {
    return (
      <ContainerLoadingPage>
        <h2>Traveling...</h2>
        <div>
          <img className="logoImg" src="https://res.cloudinary.com/dainl1ric/image/upload/v1651120998/bird_2_djvrbx.png" alt="bird-icon" />
          <SpinnerLoading />
        </div>

      </ContainerLoadingPage>
    )
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={
            <PublicRoutes isAuth={isLogged}>
              <Login />
            </PublicRoutes>
          } />

          <Route path="/register" element={
            <PublicRoutes isAuth={isLogged}>
              <Register />
            </PublicRoutes>
          } />

          <Route path="/*" element={
            <PrivateRoutes isAuth={isLogged}>
              <DashBoardRoutes />
            </PrivateRoutes>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App