import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth"
import { addDoc, collection } from "firebase/firestore"
import { dataBase } from "../../firebase/firebaseConfig"
import { types } from "../types/types"

export const registerSinc = (name, email, password, host, guia) => {
    return {
        type: types.register,
        payload: {
            name, email, password, host, guia
        }
    }
}

const saveRegisterData = (name, email, host, guia) => {
    console.log({name, email, host})
    return (dispatch) => {
        addDoc(collection(dataBase, "users"), {name, email, host, guia})
            .then((resp) => {
                console.log(resp)
            })
            .catch((error) => {
                console.log(error);
            });
    };
}

export const registerAsync = ({ name, email, password, host, guia }) => {
    return (dispatch) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                console.log(user)
                await updateProfile(auth.currentUser, { displayName: name })
                dispatch(saveRegisterData(name, email, host, guia))
                dispatch(registerSinc(name, email, password, host, guia))
                console.log('Registrado')


            })
            .catch(error => {
                console.warn('No registrado')

                console.warn(error)
            })
    }
}

