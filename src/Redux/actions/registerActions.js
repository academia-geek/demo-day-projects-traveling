import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth"
import { addDoc, collection } from "firebase/firestore"
import { dataBase } from "../../firebase/firebaseConfig"
import { types } from "../types/types"

export const registerSinc = (name, email, password, host, guia, imgGuia, contacto) => {
    return {
        type: types.register,
        payload: {
            name, email, password, host, guia, imgGuia, contacto
        }
    }
}

const saveRegisterData = (name, password, email, host, guia, imgGuia, contacto) => {
    console.log({name, email, host})
    return (dispatch) => {
        addDoc(collection(dataBase, "users"), {name, email, host, guia, imgGuia, contacto})
            .then((resp) => {
                console.log(resp)
            })
            .catch((error) => {
                console.log(error);
            });
    };
}

export const registerAsync = ({ name, password, email, host, guia, imgGuia, contacto }) => {
    return (dispatch) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                console.log(user)
                await updateProfile(auth.currentUser, { displayName: name })
                dispatch(saveRegisterData(name, password, email, host, guia, imgGuia, contacto))
                dispatch(registerSinc(name, email, password, host, guia, imgGuia, contacto))
                console.log('Registrado')
            })
            .catch(error => {
                console.warn('No registrado')

                console.warn(error)
            })
    }
}

