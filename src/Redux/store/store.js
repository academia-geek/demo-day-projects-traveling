import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducers } from "../reducers/loginReducers";
import { registerReducer } from "../reducers/registerReducer";
import { estadiaReducer } from "../reducers/estadiaReducer";
import { userReducer } from "../reducers/userReducer";
import { guiasReducer } from "../reducers/guiasReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducers,
    register: registerReducer,
    estadias: estadiaReducer,
    user: userReducer,
    guias: guiasReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)