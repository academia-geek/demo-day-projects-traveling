import { typeGuias } from "../types/types"

const initialState = {
    guias: [],
}

export const guiasReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case typeGuias.list:
            return {
                guias: [...action.payload.filter(user=>user.guia)],
              
            };
        default:
            return state;
    }
}