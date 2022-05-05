import { types } from "../types/types";

export const loginReducers = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return{
                email: action.payload.email,
                password: action.payload.password
            }
    
        default:
            return state
    }
}