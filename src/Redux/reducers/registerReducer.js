import { types } from "../types/types";

export const registerReducer = (state = {}, action) => {
    switch (action.type) {
        case types.register:
            return{
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password
            }
    
        default:
            return state
    }
}