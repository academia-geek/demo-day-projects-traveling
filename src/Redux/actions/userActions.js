import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import Swal from "sweetalert2";
import { dataBase } from "../../firebase/firebaseConfig";
import { types } from "../types/types";
import { saveRegisterData } from "./registerActions";

// ------------Reservar Estadia------------- //
export const reservarAsync = (name, email, reserva) => {
    return async dispatch => {
        const getCollection = collection(dataBase, 'users');
        const q = query(getCollection, where('email', '==', email))
        const getDataQ = await getDocs(q)
        let id
        getDataQ.forEach(async (document) => {
            id = document.id
        })
        if (id === undefined) {
            dispatch(saveRegisterData(name, email, false, false, ''))
            dispatch(reservarAsync(name, email, reserva))
        } else {

            const documentRef = doc(dataBase, 'users', id)
            await updateDoc(documentRef, { reserva })
                .then(resp => {
                    dispatch(reservarSinc(reserva))
                    dispatch(listReservasAsync(email))
                    Swal.fire({
                        width: 400,
                        icon: 'success',
                        padding: '2em',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
                .catch(error => console.log(error))
        }
    }
}

export const reservarSinc = ({ date1, date2, img, nameEstadia, ubicacion }) => {
    return {
        type: types.reserva,
        payload: {
            date1, date2, nameEstadia, img, ubicacion
        }
    }
}

export const listReservasAsync = (email) => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(collection(dataBase, "users"));
        const reservas = [];
        querySnapshot.forEach((doc) => {
            reservas.push({
                ...doc.data()
            });
        });
        const reservasActualUser = reservas.find(user => user.email === email)
        dispatch(listReservasSinc(reservasActualUser));
    };
};

export const listReservasSinc = (reserva) => {
    return {
        type: types.listReserva,
        payload: [reserva]
    }
}