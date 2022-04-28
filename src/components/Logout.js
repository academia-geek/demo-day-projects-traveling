import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutAsync } from '../Redux/actions/loginActions'

const Logout = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logoutAsync())
    }

  return (
    <div>
        <button onClick={handleLogout}>Logout :)</button>
    </div>
  )
}

export default Logout