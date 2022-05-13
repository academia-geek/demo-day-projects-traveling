import { types } from "../types/types"
import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { facebook, google } from "../../firebase/firebaseConfig"
import { saveRegisterData } from "./registerActions"
import Swal from "sweetalert2"

const auth = getAuth()

export const loginSinc = ({ email, password }) => {
    return {
        type: types.login,
        payload: {
            email, password
        }
    }
}

export const loginAsync = ({ email, password }) => {
    return (dispatch) => {

        signInWithEmailAndPassword(auth, email, password)
            .then(resp => {
                console.log('Usuario autorizado')

                dispatch(loginSinc(email, password))
            })
            .catch(error => {
                console.log('Usuario no autorizado')
                Swal.fire({
                    icon: 'error',
                    title: 'Usuario Incorrecto',
                    text: 'El usuario y/o contraseña no existen, intentalo de nuevo o registrare si aun no lo estas',
                })
            })
    }
}

export const loginGoogle = () => {
    signInWithPopup(auth, google)
        .then(resp => {
            console.log(resp)
        })
        .catch(error => {
            console.log(error)
        })
}

export const loginFacebook = () => {

    signInWithPopup(auth, facebook)
        .then(resp => {
            console.log(resp)
            console.log(resp.user)
        })
        .catch(error => {
            console.log(error)
        })

};

export const logoutAsync = () => {
    return (dispatch) => {
        signOut(auth)
            .then(() => {
                dispatch(logoutSinc())
            })
            .catch(error => console.log(error))
    }
}

export const logoutSinc = () => {
    return {
        type: types.logout
    }
}

export const isUserHost = (isHost) => {
    return {
        type: types.host,
        payload: isHost
    }
}