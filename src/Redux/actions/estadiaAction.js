
// Agregar Estadia

import { addDoc, collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { dataBase } from "../../firebase/firebaseConfig";
import { typeEstadia } from "../types/types";

export const addEstadiaAsync = (newEstadia) => {
  return (dispatch) => {
    addDoc(collection(dataBase, "estadias"), newEstadia)
      .then((resp) => {
        dispatch(addEstadiaSync(newEstadia));
        dispatch(listEstadiaAsync());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addEstadiaSync = (data) => {
  return {
    type: typeEstadia.add,
    payload: data,
  };
};

//Listar Estadia

export const listEstadiaAsync = () => {
  return async (dispatch) => {
    const querySnapshot = await getDocs(collection(dataBase, "estadias"));
    const estadias = [];
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      data["id"] = doc.id;
      
      estadias.push({
        ...data,
      });
    });
    dispatch(listSync(estadias));
  };
};

export const listSync = (estadias) => {
  return {
    type: typeEstadia.list,
    payload: estadias,
  };
};

//--------------Busqueda de Estadias--------------//

export const searchAsync = search => {
  return async dispatch => {
    if (search === '') {
      dispatch(listEstadiaAsync());
    } else {
      dispatch(searchSync(search))
    };
  };
}

export const searchSync = (search) => {
  return {
    type: typeEstadia.search,
    payload: search
  }
}

// delete estadia -------------------------------

export const deleteEstadia = (id) => {
  return async (dispatch) => {
    deleteDoc(doc(dataBase, "estadias", id));
    dispatch(deleteSincrono(id));
    dispatch(listEstadiaAsync());
  };
};

export const deleteSincrono = (estadia) => {
  return {
    type: typeEstadia.delete,
    payload: estadia,
  };
}

