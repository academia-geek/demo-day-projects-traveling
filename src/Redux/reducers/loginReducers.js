import { types } from "../types/types";

export const loginReducers = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                email: action.payload.email,
                password: action.payload.password
            }
        case types.logout:
            return {

            }
        case types.host:
            return {
                host: action.payload
            }

        default:
            return state
    }
}