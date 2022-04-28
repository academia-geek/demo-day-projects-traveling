import { typeEstadia } from "../types/types"

const initialState = {
    estadias: [],
}

export const estadiaReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case typeEstadia.add:
            return {
                estadias: [action.payload],
            };
        case typeEstadia.list:
            return {
                estadias: [...action.payload],
            };
        default:
            return state;
    }
}