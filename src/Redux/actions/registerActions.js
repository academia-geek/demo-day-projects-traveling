import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth"
import { types } from "../types/types"

export const registerSinc = ({ name, email, password }) => {
    return {
        type: types.register,
        payload: {
            name, email, password
        }
    }
}

export const registerAsync = ({ name, email, password }) => {
    return (dispatch) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then( async ({ user }) => {
                console.log(user)
                await updateProfile(auth.currentUser, {displayName: name})
                
                dispatch(registerSinc(name, email, password))
                console.log('Registrado')
                

            })
            .catch(error => {
                console.warn('No registrado')

                console.warn(error)
            })
    }
}