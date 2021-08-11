import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { patronesReducer } from "./patronesReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    ui:uiReducer,
    patrones:patronesReducer,

})