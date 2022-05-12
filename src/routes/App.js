import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Anfitrion from '../components/Anfitrion'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Login from '../components/Login'
import Navbarlanding from '../components/Navbarlanding'
import Nosotros from '../components/Nosotros'
import Register from '../components/Register'
import { dataBase } from '../firebase/firebaseConfig'
import { isUserHost } from '../Redux/actions/loginActions'
import { ContainerLoadingPage, SpinnerLoading } from '../styles/styledComp/loadingPageStyle'
import DashBoardRoutes from './DashBoardRoutes'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

const App = () => {

  const [checking, setchecking] = useState(true)
  const [isLogged, setIsLogged] = useState(false)
  const [isHost, setIsHost] = useState(false)
  const [isGuia, setIsGuia] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogged(true)
        getUserLogged(user.displayName, user.email)
      } else {
        setIsLogged(false)
      }
      setchecking(false)
    })
    dispatch(isUserHost(isHost))
  }, [setIsLogged, setchecking, isHost, isGuia])

  const getUserLogged = async (name, email) => {
    const querySnapshot = await getDocs(collection(dataBase, "users"));
    let user = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      user.push(data)
    });

    const actualUser = user.find(u => u.email === email && u.name === name)

    if (actualUser && actualUser.host) {
      setIsHost(true);
    } else {
      setIsHost(false);
    };

    if (actualUser && actualUser.guia) {
      setIsGuia(true);
    } else {
      setIsGuia(false);
    };

  };

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
        { !isLogged ? <Navbarlanding /> : null}
        <Routes>
          <Route path="/home" element={
            <PublicRoutes isAuth={isLogged}>
              <Home />
            </PublicRoutes>
          } />

          <Route path="/nosotros" element={
            <PublicRoutes isAuth={isLogged}>
              <Nosotros />
            </PublicRoutes>
          } />

          <Route path="/anfitrion" element={
            <PublicRoutes isAuth={isLogged}>
              <Anfitrion />
            </PublicRoutes>
          } />

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
              <DashBoardRoutes isHost={isHost} />
            </PrivateRoutes>
          } />
        </Routes>
        { !isLogged ? <Footer /> : null}
      </BrowserRouter>
    </div>
  )
}

export default App