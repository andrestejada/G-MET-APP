import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { patronesReducer } from "./patronesReducer";
import { uiReducer } from "./uiReducer";
import { equiposReducer } from "./equiposReducer";
import { configuracionesReducer } from "./ConfiguracionesReducer";
import { frecuenciasReducer } from "./frecuenciasReducer";
import { responsablesReducer } from "./responsablesReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    configuraciones:configuracionesReducer,
    equipos:equiposReducer,
    frecuencias:frecuenciasReducer,
    responsables:responsablesReducer,
    patrones:patronesReducer,
    ui:uiReducer,
})