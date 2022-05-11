import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../../firebase/firebaseConfig";
import { typeGuias } from "../types/types";

export const listGuiaAsync = () => {
    return async (dispatch) => {
        const getCollection = await getDocs(collection(dataBase, 'users'))
        const guias = []
        getCollection.forEach((doc) => {
            guias.push({
                ...doc.data()
            })
        })
        console.log(guias)
        dispatch(listGuiaSync(guias))
    }
}

  export const listGuiaSync = (guias) => {
    return {
      type: typeGuias.list,
      payload: guias,
    };
  };