import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth"
import { addDoc, collection } from "firebase/firestore"
import Swal from "sweetalert2"
import { dataBase } from "../../firebase/firebaseConfig"
import { types } from "../types/types"

export const registerSinc = (name, email, host, guia, imgGuia, contacto) => {
    return {
        type: types.register,
        payload: {
            name, email, host, guia, imgGuia, contacto
        }
    }
}

export const saveRegisterData = (name, email, host, guia, imgGuia, contacto) => {
    console.log({name, email, host})
    return (dispatch) => {
        addDoc(collection(dataBase, "users"), {name, email, host, guia, imgGuia, contacto})
            .then((resp) => {
                
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
                await updateProfile(auth.currentUser, { displayName: name })
                dispatch(saveRegisterData(name, email, host, guia, imgGuia, contacto))
                dispatch(registerSinc(name, password, host, guia, imgGuia, contacto))
                console.log('Registrado')
            })
            .catch(error => {
                console.warn('No registrado')
                Swal.fire({
                    icon: 'error',
                    title: 'Inicia Sesión',
                    text: 'El correo ya esta registrado, por favor inicia sesión',
                })
            })
    }
}

