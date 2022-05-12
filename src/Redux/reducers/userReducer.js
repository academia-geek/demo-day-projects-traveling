import { types } from "../types/types";

const initialState = {
    reservasUser: []
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.reserva:
            return{
                reservasUser: action.payload
            }
        case types.listReserva:
            return{
                reservasUser: [...action.payload]
            }
    
        default:
            return state
    }
}